import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { BrPage } from "@bloomreach/react-sdk";
import { ContentPage } from "./components/ContentPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BrPage configuration={{
        path: `${window.location.pathname}${window.location.search}`,
          endpoint: 'https://developers.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
          httpClient: axios
        }} mapping={{ ContentPage }}>
        </BrPage>
      </header>
    </div>
  );
}

export default App;
