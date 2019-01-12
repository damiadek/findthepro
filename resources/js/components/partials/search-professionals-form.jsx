import React, { Component } from "react";
import FormComponent from "./form";
import { Button, FormGroup, Input } from "reactstrap";

class ProfessionalFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specialization: "",
            location: "",
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
        if (this.state.location === "" || this.state.specialization === "") {
            this.setState({
                error: "Please, select all fields"
            });
            return;
        }

        let { specialization, location } = this.state;

        let data = {
            specialization: specialization,
            location: location
        };

        axios
            .post("/services", data)
            .then(
                response => console.log(response.data),
                error => console.log(error)
            );
    }

    render() {
        return (
            <FormComponent
                handleSubmit={this.searchForProfessionals}
                error={this.state.error}
            >
                <FormGroup>
                    <Input
                        type="select"
                        name="location"
                        id="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                    >
                        <option value="">Select Location</option>
                        <option value="ibadan">Ibadan</option>
                        <option value="lagos">Lagos</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input
                        type="select"
                        name="specialization"
                        id="specialization"
                        value={this.state.specialization}
                        onChange={this.handleChange}
                    >
                        <option value="">Select Area of Specialization</option>
                        <option value="teaching">Teaching</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="electrician">Electronics</option>
                        <option value="plumbing">Plumbing</option>
                    </Input>
                </FormGroup>
                <Button color="primary" className="text-white" type="submit">
                    Search for Professionals
                </Button>
            </FormComponent>
        );
    }
}

export default ProfessionalFormComponent;
