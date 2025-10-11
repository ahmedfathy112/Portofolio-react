import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Contact, { ContactUs } from "./components/Contact";
import Projects from "./components/Projects";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location.pathname]);

  return (
    <>
      <div className="App ">
        <main className="bg-black relative">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/About"
              element={
                <>
                  <AboutMe />
                </>
              }
            ></Route>
            <Route
              path="/Resume"
              element={
                <>
                  <Resume />
                </>
              }
            ></Route>
            <Route
              path="/Contact"
              element={
                <>
                  <Contact />
                </>
              }
            ></Route>
            <Route
              path="/Projects"
              element={
                <>
                  <Projects />
                </>
              }
            ></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
