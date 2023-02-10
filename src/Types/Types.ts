import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export interface ICustomLink {
    text : string;
    href : string
    fontWeight?: string
    color?: string
    handleClick?: (arg : any) => void;
}
export interface ILayout {
    title : string;
    children : any
    desc ?: string;
    navbarSx ?: any;
}
export interface INavbar {
    navbarSx?:any;
    toggleDrawer : (state?: boolean) => void
}
export interface IInput {
    multi?: boolean;
    mt?: string;
    name : string;
    label : string
    type?: string;
}
export interface IContactBox {
    t1 : string;
    t2 : string;
    t3 : string;
    target ?: string;
    href: string;
}

export interface ICustomDrawer extends INavbar {
    isOpen : boolean;
}
export interface IToolCard {
    title : string;
    svg : string;
    className ?: string;
    filter?: boolean
}
export interface ISocialMedia extends IToolCard {
    color : string;
    href : string;
}
export interface IDrawerItem {
    text : string;
    Icon : OverridableComponent < SvgIconTypeMap < {},
    "svg" >> & {
        muiName: string;
    }
    isToggleTheme?: boolean;
    url : string;
    toggleDrawer : (state?: boolean) => void
}
export interface IProjects {

    img : string;
    title : string;
    siteUrl : string;
    repoUrl : string;
    description : string;

}
export interface IProjectCard extends IProjects {
    isReversed?: boolean;
    className?: string;
}