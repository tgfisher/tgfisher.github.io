import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Header.css';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
          <Navbar className="tyrian" dark expand="md">
              <NavbarBrand href="/">Tucker</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://stanford-cnjc.github.io">
                            Stanford CNJC
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/tgfisher" >
                            <FaGithub />
                        </NavLink>
                    </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Header;

