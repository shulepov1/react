import { useState, useEffect } from "react";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

export default function Search() {
  const [query, setQuery] = useState("");
  const [isShown, setIsShown] = useState(false);

  // else {
  //   setIsLoading(false);
  // }
  return (
    <div>
      <SearchField
        query={query}
        setQuery={setQuery}
        setIsShown={setIsShown}
      ></SearchField>
      {query !== "" && isShown && (
        <SearchResults query={query} setQuery={setQuery}></SearchResults>
      )}
    </div>
  );
}
