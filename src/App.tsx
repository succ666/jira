import React from 'react';
import './App.css';
import "antd/dist/antd.less"
import {useAuth} from "./auth-context";
import {AuthenticatedApp} from "./authenticated-app";
import {UnauthenticatedApp} from "./unauthenticated-app";

function App() {
    const {user} = useAuth()
  return (
    <div className="App">
        {user? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
