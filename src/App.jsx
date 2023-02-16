import { Home } from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyLinks } from "./components/MyLinks";
function App() {
  // const openNav = () => {
  //   const navContainer = document.getElementById("nav");
  //   navContainer.style.animation = "slide-menu 1s ease";
  //   navContainer.style.animationFillMode = "forwards";
  // };
  const closeNav = () => {
    const navContainer = document.getElementById("nav");
    navContainer.style.animation = "close-menu 1s ease";
    navContainer.style.animationFillMode = "forwards";
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<MyLinks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
