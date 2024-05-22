import { Dispatch, SetStateAction } from "react";

interface props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setIsShown: Dispatch<SetStateAction<boolean>>;
}

export default function SearchField({ query, setQuery, setIsShown }: props) {
  return (
    <input
      placeholder="найти игрока"
      type="search"
      name="query"
      id="query"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      onFocus={() => setIsShown(true)}
      onBlur={() => {
        setTimeout(() => {
          setIsShown(false);
        }, 100);
      }}
    />
  );
}
