import React from "react";
import {
  HamburgerLabel,
  Li,
  OptionsMenuLink,
  SideBar,
  SidebarList,
} from "./OptionsMenu.styled";
import { paths } from "../../router/routes";
// import "./options.css";
interface Props {
  children?: React.ReactNode[];
}

const OptionsMenu: React.FC<Props> = ({ children = [] }) => {
  return (
    <>
      <HamburgerLabel>
        <input type="checkbox" />
      </HamburgerLabel>
      <SideBar>
        <SidebarList>
          {children.map((child, idx) => (
            <Li key={`${child}${idx}}`}>{child}</Li>
          ))}
          <Li>
            {" "}
            <OptionsMenuLink to={paths.search}>Search A Battle</OptionsMenuLink>
          </Li>
          <Li>
            <OptionsMenuLink to={paths.example}>Example Battle</OptionsMenuLink>
          </Li>
          <Li>
            <OptionsMenuLink to={paths.quiz}>
              Effectiveness Quiz
            </OptionsMenuLink>
          </Li>
          <Li>
            <OptionsMenuLink to={paths.home}>Home</OptionsMenuLink>
          </Li>
        </SidebarList>
      </SideBar>
    </>
  );
};
export default OptionsMenu;
