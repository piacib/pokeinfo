import React from "react";
import UrlSearch from "../../components/UrlSearch/UrlSearch";
import { SearchPageContainer } from "./SearchPage.styles";
import Page from "../Page";

const SearchPage = () => {
  return (
    <Page header>
      <SearchPageContainer>
        <UrlSearch />
      </SearchPageContainer>
    </Page>
  );
};

export default SearchPage;
