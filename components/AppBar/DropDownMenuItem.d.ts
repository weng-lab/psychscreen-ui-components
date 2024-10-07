import { default as React } from '../../../node_modules/react';
export type MenuItemProps = React.CSSProperties & {
    onClick?: () => void;
    children: React.ReactNode;
    menu: React.ReactNode;
};
declare const DropDownMenuItem: React.FC<MenuItemProps>;
export default DropDownMenuItem;
