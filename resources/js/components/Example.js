import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Row, Col } from "reactstrap";

export default class Example extends Component {
    render() {
        return (
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Button color="primary">Hello stuff</Button>
                </Col>
            </Row>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
