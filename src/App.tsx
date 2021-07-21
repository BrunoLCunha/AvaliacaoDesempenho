import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";
import "./css/bootstrap.min.css";
import "./assets/css/default.css";
import "rsuite/dist/styles/rsuite-default.css";

// Import pages
import Home from "./pages/Home.page";
import Survey from "./pages/Survey";
import Dashboard from "./pages/dashboard/dashboard.component";
import Worker from "./context/avaliator-context";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [worker, setWorker] = useState<string>("sd");

  useEffect(() => {
    // @ts-ignore */
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    // @ts-ignore */
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Worker.Provider value={{ worker: worker, setWorker: setWorker }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/avaliacao">
            <Survey />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Worker.Provider>
    </>
  );
}

export default App;
