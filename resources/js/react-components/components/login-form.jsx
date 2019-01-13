import React, { Component } from "react";
import FormComponent from "../partials/form";
import { Button, FormGroup, Input } from "reactstrap";

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        });
    }

    login(e) {
        e.preventDefault();
    }

    render() {
        return (
            <FormComponent handleSubmit={this.login} error={this.state.error}>
                <FormGroup className="mb-3">
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email Address"
                    />
                </FormGroup>
                <FormGroup className="mb-5">
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                </FormGroup>
                <Button
                    outline
                    size="lg"
                    color="warning"
                    className="text-white"
                    type="submit"
                >
                    Login <i className="fa fa-sign-in-alt" />
                </Button>
            </FormComponent>
        );
    }
}

export default LoginFormComponent;
