import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {

const [theme ,setTheme] = useState("dark");
const checkTheme =() =>{
  setTheme((curr)=>(curr ==='light' ?'dark' : 'light'));
};

  return (
    <div className="App" id={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form className="row g-3">
          <div className="col-auto">
            <select className="form-select" onChange={checkTheme}
             select={theme === 'dark'}>
              <option selected value="dark"> Dark </option>
              <option value="light">Light</option>
            </select>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
