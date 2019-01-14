import React, { Component } from "react";
import Professional from "../components/professional";
import { Row } from "reactstrap";

class Professionals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { professionals } = this.props;
        return (
            <Row className="justify-content-center">
                {professionals.map((professional, index) => (
                    <Professional professional={professional} key={index} />
                ))}
            </Row>
        );
    }
}

export default Professionals;
