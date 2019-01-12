import React, { Component } from "react";
import ProfessionalFormComponent from "../partials/search-professionals-form";
import WelcomeBanner from "../partials/welcome-banner";
import { Row, Col } from "reactstrap";

class Home extends Component {
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
                <Col sm="12" md="5" className="text-white py-5 mt-5">
                    <WelcomeBanner />
                    <ProfessionalFormComponent />
                </Col>
            </Row>
        );
    }
}

export default Home;
