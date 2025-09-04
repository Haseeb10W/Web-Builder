import { Block } from "./blocksSchema";



export interface SiteData {
  title: string;
  description: string;
  author: string;
  pages: pageSchema[];
  headers?: headerSchema[]; 
  footers?: footerSchema[];
  posts?: postSchema[];
  
}

 interface pageSchema {
  kind : 'page';
  title: string;
  slug : string;
  id: string;
  description?: string;
  content: Block[];
  image?: string;
  styling: {
    [key: string]: string;
  },
  editable : boolean;
  

}

 export interface headerSchema {
  kind: 'header';
  title : string;
  slug : string;
  id : string;
  content: Block[];
  styling: {
    [key: string]: string;
  },
  active : boolean;
  editable : boolean;
}

export interface footerSchema {
  kind: 'footer';
  title : string;
  slug : string;
  id : string;
  content: Block[];
  styling: {
    [key: string]: string;
  },
  active : boolean;
  editable : boolean;
}


 interface postSchema {
  kind: 'post';
  title : string;
  slug : string;
  id : string;
  content: Block[];
  styling: {
    [key: string]: string;
  },
  editable : boolean;
}

export type ContentSchema = pageSchema | headerSchema | footerSchema | postSchema;

 type editContentSchema <k extends ContentSchema['kind']> = {
  editType : k,
  editData : Extract<ContentSchema, { kind: k }> | null;
}

export type allEditSchema = editContentSchema<'page'> | editContentSchema<'header'> | editContentSchema<'footer'> | editContentSchema<'post'>;

export type renderSchema = editContentSchema<'page'> | editContentSchema<'post'> ;

export type editSchema = allEditSchema | null;

export interface BuilderParams {
  slug: string;
  editType: ContentSchema['kind']; // Use your defined discriminator union
}