import { SiteData } from "@/types/editSchema";

export const siteData :SiteData = {
  title: "My First Site",
  description : "A simple site to demonstrate data structure",
  author: "John Doe",
  pages : [
    {
      kind: "page",
      id: "34127ft346sfd",
      slug: "home",
      title: "Home",
      description: "Welcome to our homepage",
      content: [
        
      ],
      image: "",
      styling : {
        backgroundColor: "#ffffff",
        
      },
      editable : true,
    }, 
  ],
   headers : [
    {
      kind: "header",
      id: "3412t346sfd",
      slug: "home",
      title: "Header",
      description: "Welcome to our homepage",
      content: [
        
      ],
      styling : {
        backgroundColor: "#ffffff",
        
      },
      active: true,
      editable : true,
    }, 
  ]
}