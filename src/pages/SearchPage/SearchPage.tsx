import React from "react";
import UrlSearch from "../../components/UrlSearch/UrlSearch";
import { SearchPageContainer } from "./SearchPage.styles";

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <UrlSearch />
    </SearchPageContainer>
  );
};

export default SearchPage;
