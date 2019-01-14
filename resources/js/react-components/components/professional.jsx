import React, { Component } from "react";
import {
    Progress,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";

const getColor = rating => {
    let color;

    if (rating < 2) {
        color = "danger";
    } else if (rating < 3) {
        color = "warning";
    } else if (rating < 4) {
        color = "primary";
    } else {
        color = "success";
    }

    return color;
};

class Professional extends Component {
    constructor(props) {
        super(props);

        this.redirectToRegister = this.redirectToRegister.bind(this);
    }

    redirectToRegister() {
        window.location.href = "/view/register";
    }

    render() {
        let { professional } = this.props;
        let color = getColor(professional.rating);
        let src =
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";

        return (
            <Col sm="12" md="4" className="mb-5">
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src={
                            professional.sex == "Male"
                                ? "../images/man.jpg"
                                : "../images/woman.jpg"
                        }
                        alt="Card image cap"
                    />
                    <CardBody className="text-muted">
                        <small>Name: </small>
                        <CardTitle className="mb-2">
                            <b>{professional.name}</b>
                        </CardTitle>

                        <small>Sex: </small>
                        <CardTitle className="mb-2">
                            <b>{professional.sex}</b>
                        </CardTitle>

                        <small>Specialization: </small>
                        <CardSubtitle
                            style={{
                                textTransform: "capitalize"
                            }}
                            className="mb-2 mt-1 font-weight-bold"
                        >
                            {professional.specialization}
                        </CardSubtitle>

                        <small>Rating: </small>
                        <Progress
                            striped
                            value={professional.rating * 20}
                            className="mb-2 mt-1"
                            color={color}
                        >
                            {professional.rating * 20}%
                        </Progress>

                        <div className="text-center mt-4">
                            <Button
                                outline
                                color="primary"
                                onClick={this.redirectToRegister}
                            >
                                Hire this professional
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Professional;
