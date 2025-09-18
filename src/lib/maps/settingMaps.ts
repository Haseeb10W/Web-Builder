import {  textSettingsSet } from "@/components/blocks/Text/settings";
import { pageSettingsSet } from "../layoutSettings/page";
import { flexSettingsSet } from "@/components/blocks/flexbox/settings";
import { HeadSettingsSet } from "@/components/blocks/heading/settings";
import { ImageSettingsSet } from "@/components/blocks/Image/setting";
import { buttonSettingsSet } from "@/components/blocks/button/setting";
import { iconSettingsSet } from "@/components/blocks/icons/setting";
import { iconListSettindsSet } from "@/components/blocks/iconlist/setting";







export const settingFunctionMap : {[key:string]: any}= {
  text : textSettingsSet,
  page : pageSettingsSet,
  flex : flexSettingsSet,
  heading : HeadSettingsSet,
  image : ImageSettingsSet,
  button : buttonSettingsSet,
  icon : iconSettingsSet,
  iconlist : iconListSettindsSet

}