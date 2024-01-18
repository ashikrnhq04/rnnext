import { useState } from 'react'
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import PageContainer from "./components/PageContainer.jsx";
import BookItem from "./components/BookItem.jsx";
import BookSearch from "./components/BookSearch.jsx";
import Logo from "./assets/lws-logo-en.svg";
import books from "./books.js";


function App() {
    let [bookList, setBookList] = useState(books ?? []);
    const year = new Date().getFullYear();

    function handleSort(data) {

        setBookList((bookList) => {

            switch (data) {
                case('name_desc'):
                    return [...bookList].sort((a, b) => {
                        return b.title.localeCompare(a.title);
                    });
                case('year_asc'):
                    return [...bookList].sort((a, b) => {
                        return a.publication_year - b.publication_year;
                    });
                case('year_desc'):
                    return [...bookList].sort((a, b) => {
                        return b.publication_year - a.publication_year;
                    });
                default:
                    return [...books];
            }

        })
    }

    function handleSearch(data, list) {
        if(!data){
            setBookList(books);
            return;
        }
        let filterBooks = list.filter(item => {
            return item.title.toLowerCase().includes(data.toLowerCase());
        })
        setBookList(filterBooks);

    }

  return (
    <>

        <Navbar logo={Logo} alt={"LWS"}/>
        <main className="my-10 lg:my-14">
            <Header handlesort={handleSort} subheading={"Trending on 2021"} heading={"Trending Books of the Year"}>
                <BookSearch onSearch={handleSearch} booksList={bookList} />
            </Header>

            <PageContainer>
                <BookItem booksList={bookList}  />
            </PageContainer>
        </main>
        <Footer>
            Copyright &copy; {year} | All rights reserved by Learn with Sumit
        </Footer>

    </>
  )
}

export default App
