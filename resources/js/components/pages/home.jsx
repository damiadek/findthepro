import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";

class Home extends Component {
    render() {
        const style = {
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.34)"
        };

        return (
            <Row
                className="py-5 justify-content-around landing-div"
                style={style}
            >
                <Col sm="12" md="6" lg="4">
                    <Button color="primary">Hello stuff</Button>
                </Col>
            </Row>
        );
    }
}

export default Home;
