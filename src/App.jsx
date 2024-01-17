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
    let [studentlist, setStudentList] = useState(students);
    function searchStudent(data) {
        let filterObj = studentlist;
        setStudentList(() => {
            for(let key in filterObj) {
                filterObj[key].filter(item => {
                    return item.name === data;
                })
            }
        })
    }
    return (
      <>
          <Navbar/>
          <Hero>
              <Heading>
                  The Future of Learning starts with students at the center
              </Heading>
          </Hero>
          <Container>
              <Search searching={searchStudent}/>
              <Students students={studentlist}/>
          </Container>

          <Footer>
              Copyright &copy; {year} | All rights reserved by Learn with Sumit
          </Footer>

      </>
    )
}

export default App
