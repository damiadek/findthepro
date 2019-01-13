import React, { Component } from "react";
import FormComponent from "../partials/form";
import { Button, FormGroup, Input } from "reactstrap";

class ProfessionalFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specialization: "",
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.searchForProfessionals = this.searchForProfessionals.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        });
    }

    searchForProfessionals(e) {
        e.preventDefault();
        if (this.state.specialization === "") {
            this.setState({
                error: "Please, select the service you require"
            });
            return;
        }

        let { specialization } = this.state;

        let data = {
            specialization: specialization
        };

        axios.post("/services", data).then(
            response => {
                let professionals = response.data;
                this.props.setProfessionals(professionals);
            },
            error => console.log(error)
        );
    }

    render() {
        return (
            <FormComponent
                handleSubmit={this.searchForProfessionals}
                error={this.state.error}
            >
                <FormGroup className="mb-5">
                    <Input
                        type="select"
                        name="specialization"
                        id="specialization"
                        value={this.state.specialization}
                        onChange={this.handleChange}
                    >
                        <option value="">Select Required Service</option>
                        <option value="teaching">Teaching</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="electronics">Electronics</option>
                        <option value="plumbing">Plumbing</option>
                    </Input>
                </FormGroup>
                <Button color="primary" className="text-white" type="submit">
                    Search for Professionals <i className="fa fa-search" />
                </Button>
            </FormComponent>
        );
    }
}

export default ProfessionalFormComponent;
