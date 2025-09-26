

import ColorField from "@/components/settingFields/colorField";
import HeadingField from "@/components/settingFields/headingField";
import RangeField from "@/components/settingFields/RangeField";
import SelectField from "@/components/settingFields/selectField";
import SizeField from "@/components/settingFields/sizeField";
import SpacingField from "@/components/settingFields/spacingField";
import TextAlign from "@/components/settingFields/TextAlign";
import TextArea from "@/components/settingFields/TextArea";
// import TextEditor from "@/components/builder/settingFields/textEditor";
import TextField from "@/components/settingFields/TextField";
import dynamic from "next/dynamic";
import IconField from "@/components/settingFields/IconField";
import FontFamily from "@/components/settingFields/fontFamily";
import BackgroundAll from "@/components/settingFields/backgroundAll";
import HalfSpace from "@/components/settingFields/HalfSpace";
import Position from "@/components/settingFields/Position";
import PseudoStatus from "@/components/settingFields/pseudoStatus";
import IconSelectField from "@/components/settingFields/IconSelectField";
import Transition from "@/components/settingFields/Transition";
import Transform from "@/components/settingFields/Transform";
import NumberField from "@/components/settingFields/numberField";
import ImageSection from "@/components/settingFields/ImageSection";
import LinkField from "@/components/settingFields/LinkField";
import BoxShadow from "@/components/settingFields/BoxShadow";
import TextClasses from "@/components/settingFields/TextClasses";

import CssEditor from "@/components/settingFields/CSSEditor";

import iconsList from "@/components/settingFields/iconsList";


const TextEditor = dynamic(() => import('@/components/settingFields/textEditor'), {
  ssr: false,
  
});



export const fieldMap : {[key:string]: React.ElementType} = {
  textarea : TextArea,
  texteditor: TextEditor,
  texts : TextField,
  colors : ColorField,
  range : RangeField,
  textAlign: TextAlign,
  spacing: SpacingField,
  select: SelectField,
  size: SizeField,
  iconField: IconField,
  heading: HeadingField,
  fontFamily: FontFamily,
  background: BackgroundAll,
  halfSpace: HalfSpace,
  position: Position,
  status : PseudoStatus,
  number : NumberField ,
  iconSelect:IconSelectField,
  transition: Transition,
  transform : Transform,
  imageSection: ImageSection,
  linkField: LinkField,
  boxShadow: BoxShadow,
  textClasses : TextClasses,
  cssEditor: CssEditor,
  listsIcon : iconsList,

}