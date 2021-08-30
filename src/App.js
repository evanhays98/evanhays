import React from "react";
import {Router, Redirect, Route, HashRouter, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import Presentation from "./pages/Presentation";
import Header from "./components/Header"
import Signin from "./pages/Signin";
import Footer from "./components/Footer";

var hist = createBrowserHistory();

function App() {
  return (
      <div className="App">
        <HashRouter history={hist}>
            <Header />
                <Route path="/" exact component={Presentation}/>
                <Route path="/Signin" exact component={Signin}/>
                <Redirect to="/" />
            <Footer/>
        </HashRouter>
      </div>
  );
}

export default App;
