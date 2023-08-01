import "./App.css";
import { Switch, Route } from "react-router-dom";
import fs from "fs";
import logo from "./logo.svg";
import path from "path";
import React, { Component } from "react";


class App extends Component {
  render() {
    const componentFiles = fs.readdirSync(path.join(__dirname, "components"));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Switch>
          {componentFiles.map((file) => {
            const component = require(`./components/${file}`).default;
            const routePath = "/" + path.basename(file, ".js").toLowerCase();
            return (
              <Route key={routePath} path={routePath} component={component} />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
