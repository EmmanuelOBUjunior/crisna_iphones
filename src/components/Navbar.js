import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from '../components/Button';
export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to = '/'>
               <span style = {{textDecoration: 'none',color:'white'}}><h3>Crisna iPhones</h3></span>
            </Link>
            <ul className = "navbar-nav align-items-center">
                <li className = "nav-item ml-5"></li>
            <Link to = "/" className = "nav-link">
                Products
            </Link>
            </ul>
            <Link to = '/cart' className = "ml-auto">
                <ButtonContainer style={{background: 'var(--mainYellow)'}}>
                    <span className= "mr-2">
                    <i className= "fas fa-cart-plus" />
                    </span>
                         My Cart
                </ButtonContainer>
            </Link>
           </NavWrapper>
        );
    }
} 

const NavWrapper = styled.nav `
background: var(--mainBlue);
.navlink{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-tranform: capitalize;
}
`