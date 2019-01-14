import React, { Component } from "react";
import SignupFormComponent from "../components/signup-form";
import { Row, Col } from "reactstrap";
import { style, blanketStyle } from "../utilities/styles";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row
                className="py-5 justify-content-around landing-div"
                style={style}
            >
                <div className="blanket" style={blanketStyle} />
                <Col sm="12" md="5" lg="3" className="text-white py-5 mt-5">
                    <h1 className="my-5 text-center">
                        <span className="text-warning">Find</span>
                        <b className="text-info">thePro</b>
                    </h1>
                    <SignupFormComponent />
                </Col>
            </Row>
        );
    }
}

export default Login;
