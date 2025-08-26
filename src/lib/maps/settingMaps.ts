import {  textSettingsSet } from "@/components/blocks/Text/settings";
import { pageSettingsSet } from "../layoutSettings/page";
import { flexSettingsSet } from "@/components/blocks/flexbox/settings";
import { HeadSettingsSet } from "@/components/blocks/heading/settings";






export const settingFunctionMap : {[key:string]: any}= {
  text : textSettingsSet,
  page : pageSettingsSet,
  flex : flexSettingsSet,
  heading : HeadSettingsSet


}