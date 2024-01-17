import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Search from "./components/Search.jsx";
import Students from "./components/Students.jsx";
import Footer from "./components/Footer.jsx";
import Container from "./components/Container.jsx";
import Heading from "./components/parts/Heading.jsx";
import students from "./studentlist.js";
import {useState} from "react";


function App() {
    const year = new Date().getFullYear();
    return (
      <>
          <Navbar/>
          <Hero>
              <Heading>
                  The Future of Learning starts with students at the center
              </Heading>
          </Hero>
          <Container>
              <Search/>
              <Students students={students}/>
          </Container>

          <Footer>
              Copyright &copy; {year} | All rights reserved by Learn with Sumit
          </Footer>

      </>
    )
}

export default App
