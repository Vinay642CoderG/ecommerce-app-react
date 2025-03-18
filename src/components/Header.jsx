import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  // Getting the cart items from Redux store
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <HeaderContainer>
      <Logo>MyStore</Logo>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/about-us">About Us</NavLinkStyled>
      </Nav>
      <Link to={'cart-details'} >
        <CartContainer>
          <CartIcon>🛒</CartIcon>
          <ItemCount>{
          cartItems.length > 10 ? "10+": cartItems.length
          }</ItemCount>
        </CartContainer>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

// Styled-components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  &.active {
    font-weight: bold;
    color: #f1c40f;
  }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const CartIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 15px;
`;

const ItemCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;