import React from "react";
import { Header } from "../App.style";
import OptionsMenu from "../components/OptionsMenu/OptionsMenu";
import { GlobalStyle } from "../GlobalStyles";
import { themeObjGenerator } from "../styles/theme";

const Page = ({
  children,
  header = false,
}: {
  header?: boolean;
  children?: React.ReactNode[] | Element | JSX.Element;
}) => {
  return (
    <>
      <GlobalStyle />
      {header && (
        <Header>
          <OptionsMenu />
        </Header>
      )}
      {children}
    </>
  );
};

export default Page;
