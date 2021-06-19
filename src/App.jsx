import "./App.css";
import { Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import SideMenu from "./components/menu.component";
import { Container, Header, Content } from "rsuite";
import Page from "./components/page.component";
import SurveyComponent from "./components/SurveyComponent"
import { useState } from "react";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [funcName, setFuncName] = useState("Cara qualquer");

  return (
    <div className="App">
      <div style={{ float: "left" }}>
        <SideMenu setPageIndex={setPageIndex} />
        <Button onClick={() => setFuncName(Math.random().toString())}>Change name</Button>
      </div>

      <Page pageTitle= "Desempenho" pageSubtitle = {`Aqui você avaliará o desempenho do funcionário ${funcName}`}>    
        <br/>
          <div className="surveyComponent">
            {pageIndex !== 0 && <SurveyComponent pageIndex={pageIndex-1}/>}
          </div>
      </Page>

    </div>
  );
}

export default App;
