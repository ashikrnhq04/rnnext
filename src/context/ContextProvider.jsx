import { NewsContext } from ".";
import Container from "../components/Container";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import useNewsQuery from "../hooks/useNewsQuery";
import { useState } from "react";

export default function ContextProvider({ children }) {
  let [queryTerm, setQueryTerm] = useState("general");

  const [news, error, loading] = useNewsQuery(queryTerm);

  function handleMenuClick(item) {
    setQueryTerm(item);
  }
  return (
    <NewsContext.Provider value={{ news, error, loading }}>
      <Header></Header>
      <Container>
        <NewsFeed></NewsFeed>
      </Container>
    </NewsContext.Provider>
  );
}
