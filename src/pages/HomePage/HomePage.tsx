import React, { useEffect } from "react";
import Page from "../Page";
import Home from "../../components/Home/Home";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";

const HomePage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const paramBattleId = params.get("battleId");
  useEffect(() => {
    if (paramBattleId) {
      console.log(paramBattleId);
      const path = paths.inBattleGenerator(paramBattleId);
      console.log(path);
      console.log(params);
      navigate(path);
    }
  });
  return (
    <Page>
      <Home />
    </Page>
  );
};

export default HomePage;
