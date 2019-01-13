import React, { Component } from "react";
import NavbarComponent from "./partials/navbar";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Professionals from "./pages/professionals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "components-font-awesome/css/fontawesome-all.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professionals: []
        };

        this.setProfessionals = this.setProfessionals.bind(this);
    }

    setProfessionals(professionals) {
        this.setState({ professionals });
    }

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
                        <Route
                            path="/view"
                            exact
                            render={props => (
                                <Home
                                    setProfessionals={professionals =>
                                        this.setProfessionals(professionals)
                                    }
                                    professionals={this.state.professionals}
                                    {...props}
                                />
                            )}
                        />
                        <Route path="/view/login" exact component={Login} />
                        <Route
                            path="/view/professionals"
                            render={props => (
                                <Professionals
                                    setProfessionals={professionals =>
                                        this.setProfessionals(professionals)
                                    }
                                    professionals={this.state.professionals}
                                    {...props}
                                />
                            )}
                        />
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
