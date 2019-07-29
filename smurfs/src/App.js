import React, { Component } from "react";
import "./App.css";
import Smurfs from './components/Smurfs'
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <p>Home</p>
          <p>Smurfs</p>
        </nav>
        <h1>Welcome to Smurf Land!</h1>
        <Smurfs />
      </div>
    );
  }
}

export default App;
