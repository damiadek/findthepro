import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="row position-fixed w-100">
                <Navbar className="w-100" dark expand="md" {...this.props}>
                    <Link to="/" className="navbar-brand">
                        <span className="text-warning">Find</span>
                        <b className="text-info">thePro</b>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="login" className="nav-link">
                                    Login
                                </Link>
                            </NavItem>
                            <NavItem className="d-none d-md-block">
                                <NavLink>|</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link to="register" className="nav-link">
                                    Register
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;
