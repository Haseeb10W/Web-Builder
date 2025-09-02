
import React from "react";

export type BlockType = 'text' | 'image' | 'button' | 'heading';
export type ContainerType = 'flex' | 'grid';
export type TextBlockType = 'text' | 'heading'

 export interface BaseBlock { 
  id: string;
  type: string; 
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

 export interface  TextBlock extends BaseBlock {
  type: 'text';
  props : {
    text: string | TrustedHTML;
  }
}

 export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  props : {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
}



 export interface ImageBlock extends BaseBlock {
  type: 'image';
  props : {
    src: string;
    alt?: string;
    link?: string;
    width?: string;
    height?: string;
  }
}

 export interface ButtonBlock extends BaseBlock {
  type: 'button';
  props : {
    text: string;
    link: string;
    target : '_self' | '_blank';
    icon : string | null

  }
}

export interface  ContainerBlock extends BaseBlock{
  type: 'flex' | 'grid' ;
  children: Block[];
  props: {
    [key:string] : any
    
  }
  
  
}

export type Block = TextBlock | ImageBlock | ButtonBlock | HeadingBlock | ContainerBlock;

export type Container = ContainerBlock;

