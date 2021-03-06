/**
 * React Imports
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

/**
 * Setup Service worker
 */
import * as serviceWorker from "./serviceWorker";

/**
 * Router
 */
import { BrowserRouter, Route, Link } from "react-router-dom";

/**
 * Global style space
 */
import "./index.css";

/**
 * Components for Routes
 */
import Home from "./Components/App-Home/Home";
import About from "./Components/App-About/About";
import Cart from "./Components/App-Cart/Cart";

/**
 * App init
 */
const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <div>
          <Link to="/">Home</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </switch>
      </Fragment>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
