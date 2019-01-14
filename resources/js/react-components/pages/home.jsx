import React, { Component } from "react";
import { Row, Col, Fade, Button } from "reactstrap";

import WelcomeBanner from "../components/welcome-banner";
import Professionals from "./professionals";
import ProfessionalFormComponent from "../components/search-professionals-form";

import { style, blanketStyle } from "../utilities/styles";
import { windowScroll } from "../utilities/functions";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            specialization: "",
            professionals: []
        };

        this.setLoading = this.setLoading.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.setProfessionals = this.setProfessionals.bind(this);
    }

    setLoading(loading = false) {
        this.setState({
            loading: loading
        });
    }

    setProfessionals(professionals, specialization) {
        this.setState({ professionals, specialization });
        windowScroll({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

    scrollToTop() {
        windowScroll({ top: 0, behavior: "smooth" });
    }

    render() {
        return (
            <React.Fragment>
                <Row className="py-5 justify-content-around" style={style}>
                    <div className="blanket" style={blanketStyle} />
                    <Col sm="12" md="4" className="text-white py-5 mt-5">
                        <WelcomeBanner className="mt-5" />
                        <ProfessionalFormComponent
                            setProfessionals={this.setProfessionals}
                            setLoading={loading => this.setLoading(loading)}
                        />
                    </Col>
                </Row>
                {this.state.specialization != "" && (
                    <Row className="justify-content-center">
                        <Col
                            sm="12"
                            md="6"
                            className="text-muted py-5 mt-5 clear-fix"
                        >
                            {this.state.professionals.length > 0 ? (
                                <Fade in={!this.state.loading}>
                                    <h3 className="mb-5 font-weight-bold">
                                        Professionals with specialization "
                                        {this.state.specialization}":
                                        <Button
                                            color="success"
                                            className="float-right"
                                            onClick={this.scrollToTop}
                                        >
                                            search again
                                        </Button>
                                    </h3>
                                    <Professionals
                                        professionals={this.state.professionals}
                                    />
                                </Fade>
                            ) : (
                                <h3 className="text-center">
                                    No professionals for selected service
                                </h3>
                            )}
                        </Col>
                    </Row>
                )}
            </React.Fragment>
        );
    }
}

export default Home;
