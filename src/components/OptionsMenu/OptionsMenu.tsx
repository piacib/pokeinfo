import React, { useState } from "react";
import { HamburgerLabel, SideBar, SidebarList } from "./OptionsMenu.styled";
// import "./options.css";
interface Props {
  children: React.ReactNode[];
}
export const OptionMenu: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HamburgerLabel>
        <input type="checkbox" />
      </HamburgerLabel>
      <SideBar>
        <SidebarList>
          {children.map((child) => (
            <li>{child}</li>
          ))}
        </SidebarList>
      </SideBar>
    </>
  );
};
export default OptionMenu;
