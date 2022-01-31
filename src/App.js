import React from "react";
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signIn/SignIn";
import Signup from "./components/signup/Signup";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <React.Fragment>
        <div className="App">
          <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>
      </React.Fragment>
  );
}

export default App;
