import React from "react";
import Page from "../Page";
import { InBattleDisplay } from "../../components/InBattleDisplay/InBattleDisplay";
import { Spacer } from "../../App.style";

const InBattlePage = () => {
  const params = new URLSearchParams(window.location.search);
  const isExtension = params.has("isExtension");
  return (
    <Page header={!isExtension}>
       {isExtension && <Spacer />}
      <InBattleDisplay />
    </Page>
  );
};

export default InBattlePage;
