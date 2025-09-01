import { Block, ContainerBlock } from "@/types/blocksSchema";
import { editSchema } from "@/types/editSchema";
import { v4 as uuidv4 } from 'uuid';

export const findBlocksInContainer  = (blocks: Block[], draggedBlockId:string): Block | null => {
          for(const block of blocks){
            if(block.id === draggedBlockId) return block;
            if('children' in block && block.children) {
              const foundBlock = findBlocksInContainer(block.children, draggedBlockId);
              if(foundBlock) return foundBlock;
            }
          }
          return null
          };

export const findAllBlocks = (blocks:Block[]): Block[] | [] =>{
  let getBlocks: Block[] = [];

  for (const block of blocks){

    getBlocks.push(block)
    
    if('children' in block && block.children) {
      const findBlocks = findAllBlocks(block.children)
      getBlocks.push(...findBlocks)

    }

  }

  return getBlocks;

}




  
export const removeBlocksInContainer = (blocks:Block[], draggedBlockId:string):Block[]=>{
              return blocks.map(block => {
                if ('children' in block && block.children) {
                const newChildren = block.children.filter(child => child.id !== draggedBlockId);
                return { ...block, children: removeBlocksInContainer(newChildren, draggedBlockId) };
              }
              return block;
             });
            };


export const updateBlocksInContainer = (blocks:Block[], containerId:string, insertIndex:any, draggedBlock: Block ) : Block[]=>{
  return blocks.map(block => {
                    if (block.id === containerId && block.type === 'flex') {
                      const containerBlock = block as ContainerBlock;
                      const newChildren = [
                        ...containerBlock.children.slice(0, insertIndex),
                        draggedBlock,
                        ...containerBlock.children.slice(insertIndex)
                      ];
                      return { ...containerBlock, children: newChildren };
                    }
            
                    if ('children' in block && block.children) {
                    return { ...block, children: updateBlocksInContainer(block.children, containerId, insertIndex, draggedBlock) };
                    }
            
                    return block;
                  });
}

 const updateBlocksRecursively = (blocks: Block[], containerId:string, newBlock:Block, insertIndex: number): Block[] => {
    // console.log('Processing blocks:', blocks.map(b => ({ id: b.id, type: b.type })));
    
    return blocks.map(block => {
          //  console.log(`Checking block: ${block.id} (type: ${block.type}) against containerId: ${containerId}`);
      if (block.id === containerId && block.type === 'flex') {
        // console.log("blockId Match")
        const containerBlock = block as ContainerBlock;
        const newChildren = [
          ...containerBlock.children.slice(0, insertIndex),
          newBlock,
          ...containerBlock.children.slice(insertIndex)
        ];
        return { ...containerBlock, children: newChildren };
      }
      
      if ('children' in block && block.children) {
        return { ...block, children: updateBlocksRecursively(block.children, containerId, newBlock, insertIndex) };
      }
      
      return block;
    });
  };

// Remove block from main Page
export const removeFromMainPage = (blocks: Block[], draggedBlockId:string): Block[] => {
            return blocks.filter(block => block.id !== draggedBlockId);
          };


export const findBlock = (blocks:Block[], blockId:string):Block | null =>{
  const findBlock = blocks?.find((item:any)=>{
    return item.id === blockId
  })
  if(findBlock) return findBlock;
  else return null
}




export const findBlockOverall = (data:editSchema | undefined, blockId:string):Block | null =>{

  
  if(data?.editData){
    let allData : Block[] = [];
    switch (data?.editType){
      case 'page':
      case 'footer':
      case 'header':
      case 'post':
        allData = data?.editData?.content
        break

    }
    let blockFind;
     blockFind = findBlock(allData, blockId);


    if(!blockFind ){
      
      blockFind = findBlocksInContainer(allData, blockId);
    }
    return blockFind

    }

  return null
}


export const duplicateInContainer = (blocks: Block[], blockId: string, duplicatedBlock: Block): Block[] => {
  return blocks.map(block => {
    if ('children' in block && block.children) {
      const childIndex = block.children.findIndex(child => child.id === blockId);
      if (childIndex !== -1) {
        // Found the block in this container's children - duplicate it here
        const newChildren = [
          ...block.children.slice(0, childIndex + 1),
          duplicatedBlock,
          ...block.children.slice(childIndex + 1)
        ];
        return { ...block, children: newChildren };
      }
      // Continue searching in nested containers
      return { ...block, children: duplicateInContainer(block.children, blockId, duplicatedBlock) };
    }
    return block;
  });
};


// Delete block handler
export const deleteBlockHandler = (blockId: string, data: editSchema | undefined, updateData: ((data: editSchema) => void) | undefined) => {
  if (!data?.editData || !updateData) return;

  let blocks: Block[] = [];
  switch (data.editType) {
    case 'page':
    case 'header':
    case 'footer':
    case 'post':
      blocks = data.editData.content;
      break;
    default:
      return;
  }

  // Check if block is in main page
  const isInMainPage = blocks.some(block => block.id === blockId);
  
 
    const newBlocks = isInMainPage ? removeFromMainPage(blocks, blockId) : removeBlocksInContainer(blocks, blockId);
  
    updateData({
      ...data,
      editData: {
        ...data.editData,
        content: newBlocks
      }
    } as editSchema)
    
      

    
  
};

const deepDuplicateBlock = (block: Block): Block => {
  const vId = uuidv4();
  const newId = `${block.type}-${vId}`;
  
  const clonedBlock = JSON.parse(JSON.stringify(block)) as Block;
  clonedBlock.id = newId;
  
  if ('children' in clonedBlock && clonedBlock.children) {
    clonedBlock.children = clonedBlock.children.map(child => deepDuplicateBlock(child));
  }
  
  return clonedBlock;
};


// Duplicate block handler
export const duplicateBlockHandler = (blockId: string, data: editSchema | undefined, updateData: ((data: editSchema) => void) | undefined) => {
  if (!data?.editData || !updateData) return;

  const blockToDuplicate = findBlockOverall(data, blockId);
  if (!blockToDuplicate) return;

  const duplicatedBlock: Block = deepDuplicateBlock(blockToDuplicate);
  // {
  //   ...blockToDuplicate,
  //   id: `${blockToDuplicate.type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  //   ...(blockToDuplicate.type === 'flex' && 'children' in blockToDuplicate && {
  //     children: blockToDuplicate.children.map(child => ({
  //       ...child,
  //       id: `${child.type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  //     }))
  //   })
  // };

  let blocks: Block[] = [];
  switch (data.editType) {
    case 'page':
    case 'header':
    case 'footer':
    case 'post':
      blocks = data.editData.content;
      break;
    default:
      return;
  }

  const blockIndex = blocks.findIndex(block => block.id === blockId);
  const isInMainPage = blockIndex !== -1;
  
  const newBlocks = isInMainPage 
    ? [
        ...blocks.slice(0, blockIndex + 1),
        duplicatedBlock,
        ...blocks.slice(blockIndex + 1)
      ]
    : duplicateInContainer(blocks, blockId, duplicatedBlock);
    
  updateData({
    ...data,
    editData: {
      ...data.editData,
      content: newBlocks
    }
  } as editSchema);
};



