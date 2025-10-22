import Button from "@/components/blocks/button";
import FlexBox from "@/components/blocks/flexbox";
import Heading from "@/components/blocks/heading";
import Icon from "@/components/blocks/icons";

import Image from "@/components/blocks/Image";
import Text from "@/components/blocks/Text";
import { ElementType } from "react";
import Menu from "@/components/blocks/menu";
import IconsList from "@/components/blocks/iconlist/Index";


export const blockMap :{[key:string]: ElementType}= {
  text : Text,
  flex : FlexBox,
  heading: Heading,
  image:Image,
  button:Button,
  icon:Icon,
  iconlist : IconsList,
  menu: Menu
}