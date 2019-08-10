import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import Image from 'react-bootstrap/Image';
import { Nav, NavItem, Collapse, Navbar, NavbarBrand, NavbarToggler,} from 'reactstrap';
import PropTypes from 'prop-types';
import ATENCIONICONO from '../../assets/img/asmas/ATENCIONICONO.svg'
import MENUICONO from '../../assets/img/asmas/MENUICONO.svg'
import Grupo305 from '../../assets/img/asmas/Grupo305.svg'


//import { AppAsideToggler, } from '@coreui/react';
//import logo from '../../assets/img/brand/logo.svg'
//import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
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

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <div>
        <Navbar dark expand="md" className="theme-hd">

            <NavbarBrand href="/dashboard"><img src={Grupo305} className="img-menu" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />


                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="tab-menu" navbar>

                      <NavItem>
                        <NavLink to="/eventos" className="nav-link option-hd">¿QUÉ ES AS+?</NavLink>
                      </NavItem>


                      <NavItem>
                        <NavLink to="/eventos" className="nav-link option-hd">EVENTOS</NavLink>
                      </NavItem>


                      <NavItem>
                        <NavLink to="/beneficios" className="nav-link option-hd">BENEFICIOS</NavLink>
                      </NavItem>


                      <NavItem>
                        <NavLink to="/beneficios" className="nav-link option-hd">PROMOCIONES</NavLink>
                      </NavItem>


                      <NavItem>
                        <NavLink to="/beneficios" className="nav-link option-hd">CONTENIDOS</NavLink>
                      </NavItem>


                      <NavItem>
                        <NavLink to="/beneficios" className="nav-link option-hd">MI CUENTA</NavLink>
                      </NavItem>


                      <NavItem>
                        <NavLink to="/beneficios" className="nav-link option-hd">INSCRIBITE</NavLink>
                      </NavItem>
                      
                        <NavItem className="tab-menu">
                          <NavLink to="/beneficios" className="nav-link option-hd"><img src={ATENCIONICONO} className="opt-img-menu"/></NavLink>
                        </NavItem>

                        <NavItem className="tab-menu">
                          <NavLink to="/beneficios" className="nav-link option-hd"><img src={MENUICONO} className="opt-img-menu"/></NavLink>
                        </NavItem>
                      

                  </Nav>
                </Collapse>


        </Navbar>
      </div>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
