import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { EditAd } from "./components/EditAd";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <div style={{ maxWidth: "80rem", margin: "4rem auto" }}>
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/edit/:id" component={EditAd} />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    )
}

export default App
