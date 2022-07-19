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
    svg : any
    filter ?: boolean
}