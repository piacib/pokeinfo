import React, { useEffect } from "react";
import Page from "../Page";
import Home from "../../components/Home/Home";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
const useExtensionRedirect = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const paramBattleId = params.get("battleId");
  useEffect(() => {
    if (paramBattleId) {
      const path = paths.inExtensionGenerator(paramBattleId);
      navigate(path);
    }
  });
};

const HomePage = () => {
  useExtensionRedirect();
  return (
    <Page>
      <Home />
    </Page>
  );
};

export default HomePage;
