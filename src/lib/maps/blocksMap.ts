import FlexBox from "@/components/blocks/flexbox";
import Heading from "@/components/blocks/heading";
import Text from "@/components/blocks/Text";
import { ElementType } from "react";


export const blockMap :{[key:string]: ElementType}= {
  text : Text,
  flex : FlexBox,
  heading: Heading

}