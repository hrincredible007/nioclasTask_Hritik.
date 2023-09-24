import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import ProblemsLists from "./components/problemsList/ProblemsLists";
import TestLayout from "./components/testLayout/TestLayout";
import One from "./components/Questions/One";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Three from "./components/Questions/Three";
import Submit from "./components/submit/Submit";
import Four from "./components/Questions/Four";

const App = () => {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/problems"
            element={<ProblemsLists></ProblemsLists>}
          ></Route>
          <Route
            path="/startthetest"
            element={<TestLayout></TestLayout>}
          ></Route>

          <Route path="/one" element={<One></One>}></Route>
          <Route path="/three" element={<Three></Three>}></Route>
          <Route path="*" element={<div>Error</div>}></Route>
          <Route path="/result" element={<Submit></Submit>}></Route>
          <Route path="/four" element={<Four></Four>}></Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
