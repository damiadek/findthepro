import React, { Component } from "react";
import NavbarComponent from "./partials/navbar";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "components-font-awesome/css/fontawesome-all.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professionals: [],
            navbarClassName: "bg-transparent"
        };

        this.navbarAnimationFunction = this.navbarAnimationFunction.bind(this);
        this.setProfessionals = this.setProfessionals.bind(this);
        this.setNavbarClassName = this.setNavbarClassName.bind(this);
    }

    componentDidMount() {
        window.onscroll = this.navbarAnimationFunction;
    }

    setNavbarClassName(name) {
        this.setState({
            navbarClassName: name
        });
    }

    navbarAnimationFunction() {
        let offset = window.pageYOffset;
        if (offset > 20) {
            this.setNavbarClassName("bg-dark");
        } else {
            this.setNavbarClassName("bg-transparent");
        }
    }

    setProfessionals(professionals) {
        this.setState({ professionals });
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <NavbarComponent
                        className={"w-100 shadow " + this.state.navbarClassName}
                    />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Signup} />
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
