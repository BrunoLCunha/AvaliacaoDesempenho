import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";
import "./css/bootstrap.min.css";
import "./assets/css/default.css";

// Import pages
import Home from "./pages/Home.page";
import Survey from "./pages/Survey.page";

function App() {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore */
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    // @ts-ignore */
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/avaliacao">
          <Survey />
        </Route>
      </Switch>
    </>
  );
}

export default App;
