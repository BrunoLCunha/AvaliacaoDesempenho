import logo from './logo.svg';
import './App.css';
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import SideMenu from "./components/menu.component";

function App() {
  return (
    <div className="App">
        <SideMenu style={{position: "absolute", marginLeft: 0}}/>
        <Button>Button</Button>
    </div>
  );
}

export default App;
