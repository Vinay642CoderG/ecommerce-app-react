import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError } from '../redux/productActions';
import { fetchProducts } from '../api';
import { addToCart } from '../redux/cartActions'; // Import the addToCart action
import styled from 'styled-components';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from URL
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart.cartItems); // Access cart state
  const navigate = useNavigate();

  const product = products.find((prod) => prod.id === parseInt(id));
  
  const [isInCart, setIsInCart] = useState(false); // State to track if product is in cart

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    if (!products.length) {
      fetchProducts()
        .then((data) => {
          dispatch(setProducts(data));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          dispatch(setError('Failed to load products'));
          dispatch(setLoading(false));
        });
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch, products]);

  useEffect(() => {
    // Check if the product is in the cart
    setIsInCart(cartItems.some(item => item.id === product?.id));
  }, [cartItems, product]);

  const handleBack = () => {
    navigate('/');
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
    setIsInCart(true); // Update state to show "Go to Cart" button
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Container>
      <ProductInfo>
        {/* Left Column: Product Image */}
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ProductImageContainer>

        {/* Right Column: Product Meta Data */}
        <ProductMeta>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>

          <CartButtonsContainer>
            {/* Conditionally render Add to Cart or Go to Cart Button */}
            {!isInCart ? (
              <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
            ) : (
              <Link to={'/cart-details'}>
              <GoToCartButton onClick={handleGoToCart}>Go to Cart</GoToCartButton>
              </Link>
            )}

          <BackButton onClick={handleBack}>Back to Home</BackButton>
          </CartButtonsContainer>

        </ProductMeta>
      </ProductInfo>
    </Container>
  );
};

export default ProductDetails;

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row; /* Display in two columns */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 30px; /* Adds space between columns */
`;

const ProductImageContainer = styled.div`
  flex: 1; /* Take up equal space */
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px; /* Adjust height based on your preference */
  object-fit: contain; /* Ensure image retains aspect ratio */
  border-radius: 8px;
`;

const ProductMeta = styled.div`
  flex: 1; /* Take up equal space */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h2`
  color: #333;
  font-size: 2rem;
`;

const ProductDescription = styled.p`
  color: #555;
  font-size: 1rem;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: #007bff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const BackButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AddToCartButton = styled.button`
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const GoToCartButton = styled.button`
  padding: 10px 15px;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #e07b00;
  }
`;
