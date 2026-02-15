export interface PrompsItemLinks {
  item: string;
}

export interface HeaderItemsType{
  title:string;
  name:string;
  href:string;
}

export interface NewItemsType {
  title: string;
  description: string;
  href: string;
}

export interface PrompsNewItemsType{
  title:string;
  description:string;
  href:string;
  cant:number;
  index:number
}

export interface TopItemsType{
  title:string;
  description:string;
  href:string;
  img:string
}

export interface PrompsTopItemsType{
  title:string;
  description:string;
  href:string;
  img:string;
  index:number;
}

export interface FooterItemsType{
  title:string;
  url:string
}

export interface PromptsItemsFooterType{
  title:string;
  url:string
}