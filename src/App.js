import React from 'react';
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/sign_up">
                <SignUp/>
            </Route>
        </div>
    );
}

export default App;
