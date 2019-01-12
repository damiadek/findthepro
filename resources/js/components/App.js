import React, { Component } from "react";
import NavbarComponent from "./partials/navbar";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        const style = {
            minHeight: "100vh",
            width: "100vw",
            backgroundImage: 'url("../images/professionals.jpeg")',
            backgroundSize: "cover"
        };

        return (
            <Router>
                <div className="container-fluid" style={style}>
                    <NavbarComponent />
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
