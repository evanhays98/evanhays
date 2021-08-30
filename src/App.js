import React from "react";
import {Router, Redirect, Route, HashRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import Presentation from "./pages/Presentation";
import Header from "./components/Header"
import Signin from "./pages/Signin";
import Footer from "./components/Footer";

var hist = createBrowserHistory();

function App() {
  return (
      <div className="App">
        <Router history={hist}>
        <Header />
        <HashRouter>
            <Route path="/" exact component={Presentation}/>
            <Route path="/Signin" exact component={Signin}/>
            <Redirect to="/" />
        </HashRouter>
        <Footer/>
        </Router>
      </div>
  );
}

export default App;
