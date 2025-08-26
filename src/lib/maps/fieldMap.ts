

import ColorField from "@/components/settingFields/colorField";
import DateTimeField from "@/components/settingFields/DateTimeField";
import HeadingField from "@/components/settingFields/headingField";
import ImageFile from "@/components/settingFields/imageFile";

import NumberField from "@/components/settingFields/NumberField";
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
const TextEditor = dynamic(() => import('@/components/settingFields/textEditor'), {
  ssr: false,
  
});



export const fieldMap : {[key:string]: React.ElementType} = {
  textarea : TextArea,
  texteditor: TextEditor,
  texts : TextField,
  number : NumberField,
  colors : ColorField,
  date : DateTimeField,
  range : RangeField,
  image : ImageFile,
  textAlign: TextAlign,
  spacing: SpacingField,
  select: SelectField,
  size: SizeField,
  iconField: IconField,
  heading: HeadingField,
  fontFamily: FontFamily,
  background: BackgroundAll,
  halfSpace: HalfSpace,
  position: Position

}