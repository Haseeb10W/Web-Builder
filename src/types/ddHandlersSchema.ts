import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { editSchema } from "./editSchema";
import { Block } from "./blocksSchema";
import { updateFlexContainer } from "@/lib/builder/drop&dragHandlers";
import { settingTypes } from "@/contexts/settingsType";


export interface dragStartOverArgs {
  (
    event : DragStartEvent,
    data: editSchema | undefined,
    updateActiveId : (value: React.SetStateAction<string | null>) => void,
    updataActiveBlock : (value: React.SetStateAction<Block | null>) => void
  ):void

}

export interface sideBarDropAndAddArgs {
  (
    data : editSchema | undefined,
    updateData : ((data: editSchema) => void) | undefined ,
    insertIndex: number | undefined,
    newBlock : Block
  ) : void
}


export interface blockReorderArgs {
  (
  newBlocks : Block[],
  data : editSchema | undefined,
  updateData : ((data: editSchema) => void) | undefined ,

  ) : void


}


export interface indexReorderingArgs {
  (
    event : DragEndEvent,
    data : editSchema | undefined,

   ) :  Block[]
}


export interface dragEndArgs {
  (
    event: DragEndEvent,
    pageData : editSchema | undefined,
    updateData : ((data: editSchema) => void) | undefined ,
    handleBlockDragEnd : (event: DragEndEvent) => void,
    handleSidebarDrop : (newBlock: Block, insertIndex?: number) => void,
    handleBlockReorder: (newBlocks: Block[]) => void,
    setIsDropAnimating: (value: React.SetStateAction<boolean>) => void,
    updateFlexContainer: containerFlexUpdateArgs,
    setJustDroppedId : React.Dispatch<React.SetStateAction<string | null>>,
    setSettingType: React.Dispatch<React.SetStateAction<settingTypes | undefined>>,
    setSettingPopUp: React.Dispatch<React.SetStateAction<boolean>>

  ) : void
}



export interface containerFlexUpdateArgs {
  (containerId : string, 
  newBlock : Block,
  insertIndex : number,
  data : editSchema | undefined,
  updateData : ((data: editSchema) => void) | undefined ,

) : void

}