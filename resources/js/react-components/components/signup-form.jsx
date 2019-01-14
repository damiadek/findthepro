import React, { Component } from "react";
import FormComponent from "../partials/form";
import { Button, FormGroup, Input } from "reactstrap";

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirm_password: "",
            user_type: "",
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        });
    }

    signup(e) {
        e.preventDefault();
    }

    render() {
        return (
            <FormComponent handleSubmit={this.signup} error={this.state.error}>
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
                <FormGroup className="mb-3">
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={this.state.confirm_password}
                        onChange={this.handleChange}
                        placeholder="Confirm Password"
                    />
                </FormGroup>
                <FormGroup className="mb-5">
                    <Input
                        type="select"
                        name="user_type"
                        id="user_type"
                        value={this.state.user_type}
                        onChange={this.handleChange}
                    >
                        <option value="">What do you want to do?</option>
                        <option value="0">I want to sell my services</option>
                        <option value="1">
                            I want to employ professionals
                        </option>
                    </Input>
                </FormGroup>
                <Button
                    outline
                    block
                    size="lg"
                    color="primary"
                    className="text-white"
                    type="submit"
                >
                    Create Account <i className="fa fa-sign-up-alt" />
                </Button>
            </FormComponent>
        );
    }
}

export default LoginFormComponent;
