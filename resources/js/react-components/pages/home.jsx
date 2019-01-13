import React, { Component } from "react";
import ProfessionalFormComponent from "../components/search-professionals-form";
import WelcomeBanner from "../components/welcome-banner";
import { Row, Col } from "reactstrap";
import Professionals from "./professionals";

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
            <React.Fragment>
                <Row
                    className="py-5 justify-content-around landing-div"
                    style={style}
                >
                    <Col sm="12" md="4" className="text-white py-5 mt-5">
                        <WelcomeBanner />
                        <ProfessionalFormComponent
                            setProfessionals={this.props.setProfessionals}
                        />
                    </Col>
                    <Col sm="12" />
                    <Col
                        sm="12"
                        md="6"
                        className="text-white py-5 mt-5 clear-fix"
                    >
                        {this.props.professionals.length > 0 ? (
                            <Professionals
                                professionals={this.props.professionals}
                            />
                        ) : (
                            <h3 className="text-center">
                                No professionals for selected service
                            </h3>
                        )}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Home;
