import Page from "../Page";
import { InBattleDisplay } from "../../components/InBattleDisplay/InBattleDisplay";
import { Spacer } from "../../App.style";

const ExtensionPage = () => {
  return (
    <Page header={false}>
      <Spacer />
      <InBattleDisplay />
    </Page>
  );
};

export default ExtensionPage;
