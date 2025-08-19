'use client';

import { Block, ContainerBlock } from "@/types/blocksSchema";
import { blockReorderArgs, containerFlexUpdateArgs, dragStartOverArgs, indexReorderingArgs, sideBarDropAndAddArgs } from "@/types/ddHandlersSchema";
import { arrayMove } from "@dnd-kit/sortable";
import { removeBlocksInContainer } from "./blockHandlers";
import { editSchema } from "@/types/editSchema";




export const dragStartOverlay : dragStartOverArgs = (event, data, updateActiveId, updataActiveBlock )=>{
    const { active } = event;
    updateActiveId(active.id as string);

    if(data?.editData){
      const findBlockRecursively = (blocks: Block[], targetId: string): Block | null => {
      for (const block of blocks) {
        if (block.id === targetId) return block;
        if ('children' in block && block.children) {
          const found = findBlockRecursively(block.children, targetId);
          if (found) return found;
        }
      }
      return null;
    };

      let blocks : Block[] = [];
      switch (data.editType){
        case 'page':
          blocks = data.editData.content;
          break;
        case 'header':
          blocks = data.editData.content;
          break;
        case 'footer':
          blocks = data.editData.content;
          break;
        case 'post':
          blocks = data.editData.content;
          break;
        default:
          return [];
      }
      const draggedBlock = findBlockRecursively(blocks, active.id as string);
      updataActiveBlock(draggedBlock || null)
    }
  }


  // Remove block from flex container


  export const sideBarDropAndAdd: sideBarDropAndAddArgs = (data, updateData, insertIndex , newBlock)=>{
    if (data?.editData && updateData && data.editType === 'page') {
    const currentBlocks = data.editData.content;
    const newBlocks = insertIndex !== undefined 
      ? [
          ...currentBlocks.slice(0, insertIndex),
          newBlock,
          ...currentBlocks.slice(insertIndex)
        ]
      : [...currentBlocks, newBlock];

    const updatedPageData = {
      ...data,
      editData: {
        ...data.editData,
        content: newBlocks
      }
    };
    updateData(updatedPageData);
  }
  }



  // Block Reorder Function

  export const blockReorderOnDragging:blockReorderArgs = (newBlocks, data, updateData)=> {

    if (data?.editData && updateData) {
    // Handle each type explicitly to maintain type safety
    switch (data.editType) {
      case 'page':
        const updatedPageData = {
          ...data,
          editData: {
            ...data.editData,
            content: newBlocks
          }
        };
        updateData(updatedPageData);
        break;

      case 'header':
        const updatedHeaderData = {
          ...data,
          editData: {
            ...data.editData,
            header_content: newBlocks
          }
        };
        updateData(updatedHeaderData);
        break;

      case 'footer':
        const updatedFooterData = {
          ...data,
          editData: {
            ...data.editData,
            footer_content: newBlocks
          }
        };
        updateData(updatedFooterData);
        break;

      case 'post':
        const updatedPostData = {
          ...data,
          editData: {
            ...data.editData,
            post_content: newBlocks
          }
        };
        updateData(updatedPostData);
        break;
    }
  }
  }


  // IndexFinder of the Data 
  export const indexFinderReordering:indexReorderingArgs = (event, data)=>{
    const { active, over } = event;
    
      if (active.id !== over?.id && data?.editData) {
        let blocks: Block[] = [];
        
        switch (data.editType) {
          case 'page':
            blocks = data.editData.content;
            break;
          default:
            blocks: []
          
        }
    
        const oldIndex = blocks.findIndex((block) => block.id === active.id);
        const newIndex = blocks.findIndex((block) => block.id === over?.id);

        // const indexes = [oldIndex, newIndex]
        if (oldIndex !== -1 && newIndex !== -1) {
              const newBlocks = arrayMove(blocks, oldIndex, newIndex);
              return newBlocks
        }else {
          return blocks
        }
  }

  return []
}


// Update Flex Container

export const updateFlexContainer: containerFlexUpdateArgs = (containerId, newBlock, insertIndex, data, updateData) => {
  // console.log('updateFlexContainer called with containerId:', containerId)
  
  if (!data?.editData || !updateData) return;
  
  const removeFromAllContainers = (blocks: Block[], blockId: string): Block[] => {
    
    return blocks
      .filter(block => block.id !== blockId)
      .map(block => {
        if ('children' in block && block.children) {
          return {
            ...block,
            children: removeFromAllContainers(block.children, blockId)
          };
        }
        return block;
      });
  };

  const addToTargetContainer = (blocks: Block[]): Block[] => {
    return blocks.map(block => {
      if (block.id === containerId && block.type === 'flex') {
        const containerBlock = block as ContainerBlock;
        const newChildren = [
          ...containerBlock.children.slice(0, insertIndex),
          newBlock,
          ...containerBlock.children.slice(insertIndex)
        ];
        return { ...containerBlock, children: newChildren };
      }
      
      if ('children' in block && block.children) {
        return { ...block, children: addToTargetContainer(block.children) };
      }
      
      return block;
    });
  };


  

  if(data.editType === 'page' && data.editData){
   
    const blocksWithoutDragged = removeFromAllContainers(data.editData.content, newBlock.id);
    // console.log(blocksWithoutDragged)
    const updatedBlocks = addToTargetContainer(blocksWithoutDragged);
    
    const updatedPageData = {
      ...data,
      editData : {
        ...data.editData,
        content : updatedBlocks
      }
    }
    updateData(updatedPageData);

  }

  
};



export const findParentFlexContainer = (childId: string, pageData: any): ContainerBlock | null => {
  const findInBlocks = (blocks: Block[]): ContainerBlock | null => {
    for (const block of blocks) {
      if ('children' in block && block.children) {
        // console.log("children")
        if (block.type === 'flex' && block.children.some(child => child.id === childId)) {
          return block as ContainerBlock;
        }
        const found = findInBlocks(block.children);
        if (found) return found;
      }
    }
    return null;
  };
  
  if (pageData?.editData?.content) {
    return findInBlocks(pageData.editData.content);
  }
  return null;
};

export const updateFlexContainerChildren = (containerId: string, newChildren: Block[], pageData: any, updateData: any) => {
  // console.log('this run updateFlexContainerChildren')
  if (!pageData?.editData || !updateData) return;
  
  const updateBlocksRecursively = (blocks: Block[]): Block[] => {
    return blocks.map(block => {
      if (block.id === containerId && block.type === 'flex') {
        const containerBlock = block as ContainerBlock;
        return { ...containerBlock, children: newChildren };
      }
      
      if ('children' in block && block.children) {
        return { ...block, children: updateBlocksRecursively(block.children) };
      }
      
      return block;
    });
  };

  if (pageData.editType === 'page' && pageData.editData) {
    const updatedBlocks = updateBlocksRecursively(pageData.editData.content);
    const updatedPageData = {
      ...pageData,
      editData: {
        ...pageData.editData,
        content: updatedBlocks
      }
    };
    updateData(updatedPageData);
  }
  
};


export const removeFromFlexContainer = (blockId: string, data: any, updateData: any) => {
  if (!data?.editData || !updateData) return;
  
  const removeBlockRecursively = (blocks: Block[]): Block[] => {
    return blocks.map(block => {
      if ('children' in block && block.children) {
        // console.log("children is in the block")
        // console.log(block);
        // console.log(blockId)
        const newChildren = block.children.filter(child => child.id !== blockId);
        // console.log(newChildren);
        return { ...block, children: removeBlockRecursively(newChildren) };
      }
      return block;
    })
      // .filter(block => block.id !== blockId);
  };

  if (data.editType === 'page' && data.editData) {
    // console.log("it run")
    const updatedBlocks = removeBlockRecursively(data.editData.content);
    // console.log(updatedBlocks)
    const updatedPageData = {
      ...data,
      editData: {
        ...data.editData,
        content: updatedBlocks
      }
    };
    updateData(updatedPageData);
  }
};