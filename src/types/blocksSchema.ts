
import { ButtonBlock } from "@/components/blocks/button/blockSchema";

import { HeadingBlock } from "@/components/blocks/heading/blockSchema";
import { IconListBlock } from "@/components/blocks/iconlist/blockSchema";
import { IconBlock } from "@/components/blocks/icons/blockSchems";
import { ImageBlock } from "@/components/blocks/Image/blockSchema";
import { TextBlock } from "@/components/blocks/Text/blockSchema";
import React from "react";

export type BlockType = 'text' | 'image' | 'button' | 'heading' | 'icon' | 'iconlist';
export type ContainerType = 'flex' | 'grid';
export type TextBlockType = 'text' | 'heading'

 export interface BaseBlock { 
  id: string;
  type: string; 
  responsiveStyles ?: {
    baseStyle?:{[key:string]: string};
    tablet?: {[key:string]: string};
    desktop?: {[key:string]: string};
    hoverStyles?: {[key:string]: string},
  },
  
  styles?  : React.CSSProperties;
  tailWindClasses?: string;
  customClasses?: string;
  classTracking?: {[key:string]: any};
  draggable?: boolean;
  props?: {[key: string]: any}
  resizable?: boolean;
  editable?: boolean;
  link: string;
}

export interface  ContainerBlock extends BaseBlock{
  type: 'flex' | 'grid' ;
  children: Block[];
  props: {
    [key:string] : any
    
  }  
}

export type Block = TextBlock | ImageBlock | ButtonBlock | HeadingBlock | ContainerBlock | IconBlock | IconListBlock;

export type Container = ContainerBlock;

