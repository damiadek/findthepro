import React, { Component } from "react";
import Professional from "../components/professional";

class Professionals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { professionals } = this.props;
        return (
            <div>
                {professionals.map((professional, index) => (
                    <Professional professional={professional} key={index} />
                ))}
            </div>
        );
    }
}

export default Professionals;
