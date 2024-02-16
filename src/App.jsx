import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import useNewsQuery from "./hooks/useNewsQuery";
import NewsFeed from "./components/NewsFeed";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { NewsContext } from "./context/index";

function App() {
  let [queryTerm, setQueryTerm] = useState({ term: "", type: "query" });

  const [news, error, loading] = useNewsQuery(queryTerm);

  function handleMenuClick(item) {
    setQueryTerm((prevTerm) => ({
      ...prevTerm,
      term: item,
      type: "query",
    }));
  }

  return (
    <>
      <NewsContext.Provider
        value={{ news, loading, error, queryTerm, setQueryTerm }}>
        <>
          <Header clickMenu={handleMenuClick} />
          <Container>
            {error && <Error />}
            {loading.status && <Loading />}
            {!error && !loading.status && (
              <>
                <NewsFeed></NewsFeed>
                <Sidebar></Sidebar>
              </>
            )}
          </Container>
          <Footer />
        </>
      </NewsContext.Provider>
    </>
  );
}

export default App;
