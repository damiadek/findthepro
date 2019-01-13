import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Professional extends Component {
    render() {
        let { professional } = this.props;
        return (
            <Row className="justify-content-around">
                <Col sm="12" md="4">
                    <div>
                        <b>{professional.name}</b>
                        <br />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Professional;
