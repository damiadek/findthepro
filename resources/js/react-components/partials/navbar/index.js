import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
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
                <Navbar className="w-100" color="transparent" dark expand="md">
                    {/* <NavbarBrand href="/view">
                        <span className="text-warning">Find</span>
                        <b className="text-info">thePro</b>
                    </NavbarBrand> */}

                    <Link to="/view" className="navbar-brand">
                        <span className="text-warning">Find</span>
                        <b className="text-info">thePro</b>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/view/login" className="nav-link">
                                    Login
                                </Link>
                                {/* <NavLink href="view/login">Login</NavLink> */}
                            </NavItem>
                            <NavItem>
                                {/* <NavLink>|</NavLink> */}
                                <Link
                                    to="/view/professionals"
                                    className="nav-link"
                                >
                                    professionals
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Register</NavLink>
                            </NavItem>
                            {/*<UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;
