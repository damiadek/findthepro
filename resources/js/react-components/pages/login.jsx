import React, { Component } from "react";
import LoginFormComponent from "../components/login-form";
import { Row, Col } from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.44)"
        };

        return (
            <Row
                className="py-5 justify-content-around landing-div"
                style={style}
            >
                <Col sm="12" md="4" className="text-white py-5 mt-5">
                    <h1 className="my-5">Please, fill in your details</h1>
                    <LoginFormComponent />
                </Col>
            </Row>
        );
    }
}

export default Login;
