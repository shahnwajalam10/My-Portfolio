import Aboutme from "./Components/Aboutme"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Reconnect from "./Components/Reconnect"
// import Workexperience from "./Components/Workexperience"

function App() {

  return (
    <>
    <Navbar/>
    <Reconnect/>
    <Aboutme/>
    {/* <Workexperience/> */}
    <Projects/>
    <Education/>
    <Footer/>
    </>
  )
}

export default App
