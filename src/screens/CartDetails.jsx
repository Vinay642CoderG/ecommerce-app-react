import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartActions'; // Assuming you have updateQuantity action
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Handle quantity update (increase or decrease)
  const handleQuantityChange = (id, action) => {
    dispatch(updateQuantity(id, action)); // Pass the id and the action (increase/decrease)
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Remove item from cart
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <EmptyCartContainer>
        <CartTitle>Shopping Cart</CartTitle>
        <h2>Your cart is empty!</h2>
        <Link to="/">Go back to Shop</Link>
      </EmptyCartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartItemsContainer>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemImage>
              <img src={item.image} alt={item.title} />
            </ItemImage>
            <ItemDetails>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>

              {/* Quantity Controls */}
              <QuantityContainer>
                <QuantityButton onClick={() => handleQuantityChange(item.id, 'decrease')}>-</QuantityButton>
                <ItemQuantity>{item.quantity}</ItemQuantity>
                <QuantityButton onClick={() => handleQuantityChange(item.id, 'increase')}>+</QuantityButton>
              </QuantityContainer>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>Remove</RemoveButton>
            <ItemTotal>
              ${(item.price * item.quantity).toFixed(2)}
            </ItemTotal>
          </CartItem>
        ))}
      </CartItemsContainer>

      <CartTotal>
        <TotalText>Total:</TotalText>
        <TotalAmount>${calculateTotal().toFixed(2)}</TotalAmount>
      </CartTotal>

      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </CartContainer>
  );
};

export default CartDetails;

// Styled Components

const CartContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartTitle = styled.h1`
  text-align: center;
  color: #333;
`;

const CartItemsContainer = styled.div`
  margin-top: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
`;

const ItemImage = styled.div`
  width: 120px;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
  padding-left: 15px;
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ItemQuantity = styled.p`
  font-size: 1rem;
  color: #555;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #bbb;
  }
`;

const RemoveButton = styled.button`
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #c0392b;
  }
`;

const ItemTotal = styled.p`
  font-size: 1rem;
  color: #007bff;
  font-weight: bold;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-top: 30px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TotalText = styled.p`
  font-weight: bold;
  color: #333;
`;

const TotalAmount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const CheckoutButton = styled.button`
  padding: 15px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  a {
    color: #007bff;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
