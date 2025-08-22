
import {
  LayoutPanelTop,
  Grid3x2,
  Text,
  Image,
  Heading,
  MousePointerClick,
  ChevronDown,
  ChevronUp,
  PanelLeft,
  Settings,
  Laptop,
  Tablet,
  Smartphone,
  AlignLeft,
  AlignRight,
  AlignCenter,
  AlignJustify,
  Link2,
  Unlink2,
  Link2Off,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Trash2,
  Copy,
  Upload,
  Video,

  Play,
  TriangleAlert,

  ImagePlus,
  Plus,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveDown,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyCenter,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween

} from 'lucide-react';


import { FaTabletAlt } from "react-icons/fa";
import { MdAlignVerticalBottom, MdAlignVerticalCenter, MdAlignVerticalTop } from 'react-icons/md';
import { TbDiabolo } from 'react-icons/tb';



export const iconMap : {[key:string]: React.ElementType} ={
  flex : LayoutPanelTop,
  grid : Grid3x2,
  text: Text,
  image: Image,
  heading: Heading,
  button: MousePointerClick,
  downarrow : ChevronDown,
  uparrow : ChevronUp,
  togglebtn: PanelLeft,
  settings : Settings,
  laptop: Laptop,
  tablet: Tablet,
  mobile : Smartphone,
  left : AlignLeft,
  center: AlignCenter,
  right: AlignRight,
  justify: AlignJustify,
  alllink : Link2,
  halflink: Unlink2,
  unlink : Link2Off,
  vStart : AlignVerticalJustifyStart,
  vCenter: AlignVerticalJustifyCenter,
  vEnd: AlignVerticalJustifyEnd,
  vSpaceAround:  AlignVerticalSpaceAround,
  vSpaceBetween: AlignVerticalSpaceBetween,
  trash: Trash2,
  copy: Copy,
  upload: Upload,
  video: Video,

  play : Play,
  error: TriangleAlert,

  addimg: ImagePlus,
  delete: Trash2,
  add: Plus,
  ldirection: MoveLeft,
  rdirection: MoveRight,
  tdirection:MoveUp,
  ddirection: MoveDown,
  jstart: AlignHorizontalJustifyStart,
  jend: AlignHorizontalJustifyEnd,
  jcenter: AlignHorizontalJustifyCenter,
  jspacearound :  AlignHorizontalSpaceAround,
  jspacebetween: AlignHorizontalSpaceBetween,
  rVStart : MdAlignVerticalTop, 
  rVCenter : MdAlignVerticalCenter,
  rVEnd: MdAlignVerticalBottom,
}


