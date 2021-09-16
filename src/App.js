import React from "react";
import {Router, Redirect, Route, HashRouter, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import Presentation from "./pages/Presentation";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";
import CompetencePage from "./pages/CompetencePage";
import ScrollToTop from "./components/ScrollToTop";
import ExperiencePage from "./pages/ExperiencePage";
import FormationPage from "./pages/FormationPage";
import ProjetPage from "./pages/ProjetPage";

var hist = createBrowserHistory();

function App() {
  return (
      <div className="App">
        <HashRouter>
            <ScrollToTop />
            <Header />
                <Route path="/" exact component={Presentation}/>
                <Route path="/Aboutme" exact component={Aboutme}/>
                <Route path="/Competence" exact component={CompetencePage}/>
                <Route path="/Experience" exact component={ExperiencePage}/>
                <Route path="/Formation" exact component={FormationPage}/>
                <Route path="/Projet" exact component={ProjetPage}/>
            <Footer/>
        </HashRouter>
      </div>
  );
}

export default App;
