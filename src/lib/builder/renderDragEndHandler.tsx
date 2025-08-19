'use client'

import useBlockSchema from "@/hooks/useBlockSchema";
import { Block, BlockType, ContainerBlock, ContainerType } from "@/types/blocksSchema";
import { dragEndArgs } from "@/types/ddHandlersSchema"
import { findParentFlexContainer, removeFromFlexContainer, updateFlexContainerChildren } from "./drop&dragHandlers";
import { findBlocksInContainer, removeBlocksInContainer, removeFromMainPage, updateBlocksInContainer } from "./blockHandlers";
import { setSettings } from "./settingHandlers";


export const DragEndHandler: dragEndArgs = (event, pageData, updateData, handleBlockDragEnd, handleSidebarDrop, handleBlockReorder, setIsDropAnimating, updateFlexContainer, setJustDroppedId, setSettingType, setSettingPopUp )=>{

  const {active, over} = event; 
  
  // console.log(active)

  if(active){
    setSettings(active,setJustDroppedId, setSettingType, setSettingPopUp)
    
  }
    
        

// Ist: Add into the Flex 
    if (over?.data.current?.type === 'dropzone' && String(over?.id).includes('flex-dropzone')) {
        // console.log("overId:", over.id)
        const idParts = String(over.id).split('-')
        const containerId = idParts.slice(2, -1).join('-');
        //  console.log('Container ID:', containerId);
        const insertIndex = over.data.current.index;
        // console.log(containerId)
        
        if (active.data.current?.source === 'sidebar') {
          // console.log('sidebar')
          // console.log(active.data.current.type )
          const newBlock = useBlockSchema({ type: active.data.current.type });
          // console.log('this run')
          if (newBlock) {
            // console.log('block exist')
            // Add block to flex container
            updateFlexContainer(containerId, newBlock, insertIndex, pageData, updateData);
          }

        }else if (active.data.current?.type === 'section'){
          // console.log('this section is run')
          
          const draggedBlockId = active.id as string;
          const activeParent = findParentFlexContainer(draggedBlockId, pageData);
          const isInternalFlexSort = activeParent && activeParent.id === containerId;


          if(pageData?.editData){
            let allBlocks: Block[] = [];
            switch (pageData.editType){
              case 'page':
                allBlocks = pageData.editData.content;
                break;
            }
            const draggedBlock = findBlocksInContainer(allBlocks, draggedBlockId);
            if(draggedBlock && updateData){
              if(activeParent && !isInternalFlexSort){
                updateFlexContainer(containerId, draggedBlock, insertIndex, pageData, updateData);
      
              }
              else{

              let blocksAfterRemoval:Block[];
              if(isInternalFlexSort){
                
                blocksAfterRemoval = removeBlocksInContainer(pageData.editData.content, draggedBlockId)
              }else{
                blocksAfterRemoval = removeFromMainPage(pageData.editData.content, draggedBlockId)
              }
               
             

            const updatedBlocks = updateBlocksInContainer(blocksAfterRemoval, containerId, insertIndex, draggedBlock);
            if(pageData.editType == 'page'){
              const updatedPageData = {
              ...pageData,
              editData: {
              ...pageData.editData,
              content: updatedBlocks
              }
            };
            updateData(updatedPageData);

            }
          }
            
            
        }
      }
    }
  }
      // 2nd: Handle FleContainer to DropZones or MainPage
      else if (over?.data.current?.type === 'dropzone' && active.data.current?.type === 'section' && !String(over.id).includes('flex-dropzone')) {
        const draggedBlockId = active.id as string;
  
        const insertIndex = over.data.current.index;
        
          let draggedBlock: Block | null = null;
          if(pageData?.editData){
          draggedBlock = findBlocksInContainer(pageData.editData.content, draggedBlockId);
          }
        
        if(draggedBlock && pageData?.editData && updateData && pageData?.editType=="page"){
          // console.log("draggedBlock:", draggedBlock)
          const activeParent = findParentFlexContainer(draggedBlockId, pageData);

          if(activeParent && pageData?.editData?.content) {
            
            
            const blocksAfterRemoval = removeBlocksInContainer(pageData.editData.content, draggedBlockId);
            const newBlocks = [
              ...blocksAfterRemoval.slice(0, insertIndex),
              draggedBlock,
              ...blocksAfterRemoval.slice(insertIndex)
            ];

        //      const newBlocks = insertIndex === -1 
        // ? [...blocksAfterRemoval, draggedBlock] // Add to end for renderer-dropzone
        // : [
        //     ...blocksAfterRemoval.slice(0, insertIndex),
        //     draggedBlock,
        //     ...blocksAfterRemoval.slice(insertIndex)
        //   ];

            const updatedPageData = {
              ...pageData,
              editData: {
              ...pageData.editData,
              content: newBlocks
              }
            };
            updateData(updatedPageData);


        
          }else{
            const currentBlocks =   pageData.editData.content;
            const draggedBlockIndex = currentBlocks?.findIndex(block => block.id === draggedBlockId);
            
            if (draggedBlockIndex !== -1) {
              const draggedBlock = currentBlocks[draggedBlockIndex];
              const filteredBlocks = currentBlocks.filter(block => block.id !== draggedBlockId);
              const adjustedIndex = draggedBlockIndex < insertIndex ? insertIndex - 1 : insertIndex;

              const newBlocks = [
                ...filteredBlocks.slice(0, adjustedIndex),
                draggedBlock,
                ...filteredBlocks.slice(adjustedIndex)
              ];

              handleBlockReorder(newBlocks);
            }
          }
            
        
        
      }
    }
    //3rd:  Handle FlexContainer to Main Renderer
else if (over?.id === 'renderer-dropzone' && active.data.current?.type === 'section') {
  const draggedBlockId = active.id as string;


  let draggedBlock: Block | null = null;
  if(pageData?.editData){
    draggedBlock = findBlocksInContainer(pageData.editData.content, draggedBlockId);
  }

  if(draggedBlock && pageData?.editData && updateData && pageData?.editType=="page"){
    const activeParent = findParentFlexContainer(draggedBlockId, pageData);

    if(activeParent && pageData?.editData?.content) {
      // From flex container to main renderer
      const removeBlockRecursively = (blocks:Block[]):Block[]=>{
        return blocks.map(block => {
          if ('children' in block && block.children) {
            const newChildren = block.children.filter(child => child.id !== draggedBlockId);
            return { ...block, children: removeBlockRecursively(newChildren) };
          }
          return block;
        });
      };
      
      const blocksAfterRemoval = removeBlocksInContainer(pageData.editData.content, draggedBlockId);
      const newBlocks = [...blocksAfterRemoval, draggedBlock]; 

      const updatedPageData = {
        ...pageData,
        editData: {
          ...pageData.editData,
          content: newBlocks
        }
      };
      updateData(updatedPageData);
    }
  }
}
  // 4th: Handle Section to Section Drop in the Flex
      else if (active.data.current?.type === 'section' && over?.data.current?.type === 'section') {
        const activeParent = findParentFlexContainer(active.id as string, pageData);
         const overParent = findParentFlexContainer(over.id as string, pageData);

         if (activeParent && overParent && activeParent.id === overParent.id) {
           // Both elements are in the same flex container - handle internal sorting
           const flexContainer = activeParent;
           const oldIndex = flexContainer.children.findIndex(child => child.id === active.id);
           const newIndex = flexContainer.children.findIndex(child => child.id === over.id);

           if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
             const newChildren = [...flexContainer.children];
             const [movedItem] = newChildren.splice(oldIndex, 1);
             newChildren.splice(newIndex, 0, movedItem);

             // Update the flex container with new children order
             updateFlexContainerChildren(flexContainer.id, newChildren, pageData, updateData);
           }
         }
          else if (active.id !== over.id) {
            handleBlockDragEnd(event);
          }
      }
      //5th:  Handle sidebar drops to dropzones
      else if (over?.data.current?.type === 'dropzone' && active.data.current?.source === 'sidebar') {
        const dragData = active.data.current;
        const insertIndex = over.data.current.index;
        const newBlock = useBlockSchema({ type: dragData.type as BlockType | ContainerType });
  
        if (newBlock) {
          handleSidebarDrop(newBlock, insertIndex);
        }
      }
      //6th:  Handle sidebar drops to Main Page/Renderer
        else if (over?.id === 'renderer-dropzone' && active.data.current?.source === 'sidebar') {
        const dragData = active.data.current;
        const newBlock = useBlockSchema({ type: dragData.type as BlockType | ContainerType });
  
        if (!newBlock) {
          console.warn(`Failed to create block for type: ${dragData.type}`);
          return;
        }
  
        setIsDropAnimating(true);
        setTimeout(() => setIsDropAnimating(false), 300);
  
        if (pageData?.editData && updateData && pageData.editType === 'page') {
          const updatedPageData = {
            ...pageData,
            editData: {
              ...pageData.editData,
              content: [...pageData.editData.content, newBlock]
            }
          };
          updateData(updatedPageData);
        }
      }
  
    





// Function End
}
