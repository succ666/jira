import React from 'react';
import './App.css';
import {ProjectListScreen} from "./screens/project-lilst";
import {TsReactTest} from "./screens/try-use-array";
import {LoginScreen} from "./screens/login";

function App() {
  return (
    <div className="App">
      {/*<ProjectListScreen/>*/}
      {/*  <TsReactTest></TsReactTest>*/}
        <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
