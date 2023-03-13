import React from "react";
import { HamburgerLabel, SideBar, SidebarList } from "./OptionsMenu.styled";
// import "./options.css";
interface Props {
  children: React.ReactNode[];
}
const OptionsMenu: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HamburgerLabel>
        <input type="checkbox" />
      </HamburgerLabel>
      <SideBar data-testid="aside-menu">
        <SidebarList>
          {children.map((child, idx) => (
            <li key={`${child}${idx}}`}>{child}</li>
          ))}
        </SidebarList>
      </SideBar>
    </>
  );
};
export default OptionsMenu;
