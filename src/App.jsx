import "./App.css";
import { Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import SideMenu from "./components/menu.component";
import { Container, Header, Content } from "rsuite";
import Page from "./components/page.component";
import SurveyComponent from "./components/SurveyComponent"

function App() {
  return (
    <div className="App">
      <div style={{ float: "left" }}>
        <SideMenu />
      </div>

      <Page pageTitle= "Avaliação de desempenho" pageSubtitle= "Aqui você avaliará o desempenho do funcionário Carlos Alberto de Nóbrega">    
        <br/>
          <div className="surveyComponent">
            <SurveyComponent />
          </div>
      </Page>
    </div>
  );
}

export default App;
