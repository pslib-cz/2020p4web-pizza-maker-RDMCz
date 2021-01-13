import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/" tag={Link}>Pizzotvořič</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem><NavLink to="/order/pizza" tag={Link}>Objednat Pizzu</NavLink></NavItem>
                        <NavItem><NavLink to="/order/calzone" tag={Link}>Objednat Calzone</NavLink></NavItem>
                        <NavItem><NavLink to="/ingredients" tag={Link}>Ingredience</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
