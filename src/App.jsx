import "./App.css";
import { Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import SideMenu from "./components/menu.component";
import { Container, Header, Content } from "rsuite";
import Page from "./components/page.component";

function App() {
  return (
    <div className="App">
      <div style={{ float: "left" }}>
        <SideMenu />
      </div>

      <Page pageTitle= "Avaliação de desempenho" pageSubtitle= "Aqui você avaliará o desempenho do funcionário Carlos Alberto de Nóbrega">    
        <br/>
        <Button>0/10</Button>
        <Button>10/10</Button>
      </Page>
    </div>
  );
}

export default App;
