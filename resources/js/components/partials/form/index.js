import React, { Component } from "react";
import { Form, Alert } from "reactstrap";

class FormComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                {this.props.error && (
                    <Alert color="danger">{this.props.error}</Alert>
                )}
                {this.props.children}
            </Form>
        );
    }
}

export default FormComponent;
