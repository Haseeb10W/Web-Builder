import { themeData } from "@/types/editSchema";
import { HeaderOne } from "./components/Headers";
import { BannerOne } from "./components/HeroSections";
import { ChooseUs } from "./components/ChosseUs";
import { OurClient } from "./components/OurClient";
import { OurTeam } from "./components/OurTeam";
import { Footer } from "./components/Footers";


export const themeOne : themeData ={
  title: 'theme One',
  description: 'This is theme one description',
    pages: [
      {
      kind : 'page',
      title: 'Home Page',
      slug : 'home',
      id: 'page-home-34454',
      content: [
           BannerOne,
           ChooseUs,
           OurClient,
           OurTeam
      
      ],
        styling: {
        },
        
        active: true,
        editable : false,
        pageStatus : 'main' , 

    },
  ],

    headers: [
      HeaderOne,
     

    ],
    footers: [
      Footer
    ],
    active:true,
    themeEditMode: 'on' ,
}