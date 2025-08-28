import FlexBox from "@/components/blocks/flexbox";
import Heading from "@/components/blocks/heading";
import Image from "@/components/blocks/Image";
import Text from "@/components/blocks/Text";
import { ElementType } from "react";


export const blockMap :{[key:string]: ElementType}= {
  text : Text,
  flex : FlexBox,
  heading: Heading,
  image:Image

}