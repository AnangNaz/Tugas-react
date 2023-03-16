import Home from "./components/HomeComponent";
import NavBarComponent from "./components/NavBarComponent"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBarComponent />
      <Home />

      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
