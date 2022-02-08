import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron,Nav, NavbarToggler,Collapse,NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
         return(
             <>
            <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/">Ristorante Con Fusion</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink class="nav-link" to="/home"><span className='fa fa-home fa-lg'></span> Home</NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink class="nav-link" to="/aboutus"><span className='fa fa-info fa-lg'></span> About /us</NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink class="nav-link" to="/menu"><span className='fa fa-list fa-lg'></span> Manu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink class="nav-link" to="/contactus"><span className='fa fa-address-card fa-lg'></span> Contact Us</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>To Much Confusion</h1>
                            <p>WE take inspiration from the world's best cuisines</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
             </>
         )
    }
}

export default Header;