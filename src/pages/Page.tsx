import React from "react";
import { Header } from "../App.style";
import OptionsMenu from "../components/OptionsMenu/OptionsMenu";

const Page = ({
  children,
}: {
  children?: React.ReactNode[] | Element | JSX.Element;
}) => {
  return (
    <>
      <Header>
        <OptionsMenu />
      </Header>
      {children}
    </>
  );
};

export default Page;
