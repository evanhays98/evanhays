import React from "react";
import {Router, Redirect, Route, HashRouter, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import Presentation from "./pages/Presentation";
import Header from "./components/Header"
import Signin from "./pages/Signin";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";

var hist = createBrowserHistory();

function App() {
  return (
      <div className="App">
        <HashRouter history={hist}>
            <Header />
                <Route path="/" exact component={Presentation}/>
                <Route path="/Signin" exact component={Signin}/>
                <Route path="/Aboutme" exact component={Aboutme}/>
            <Footer/>
        </HashRouter>
      </div>
  );
}

export default App;
