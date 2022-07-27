import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ICustomLink {
    text : string;
    href: string
    fontWeight ?: string
    color ?: string
    handleClick ?: (arg:any) => void;
}
export interface ILayout {
    title : string;
    children : any
}
export interface INavbar {
    toggleDrawer: (state ?: boolean) => void
} 
export interface ICustomDrawer extends INavbar {
    isOpen: boolean;
}
export interface IToolCard {
    title : string;
    svg : any;
    className: string;
    filter ?: boolean
}
export interface IDrawerItem {
    text : string;
    Icon  : OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
    url : string;
    toggleDrawer: (state?: boolean ) => void
}