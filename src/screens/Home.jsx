import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../redux/productActions';
import { fetchProducts } from '../api';
import List from '../components/List';
import styled from 'styled-components';


const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    fetchProducts()
      .then((data) => {
        dispatch(setProducts(data));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError('Failed to load products'));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  return (
    <HomeContainer>
      <Heading>Product List</Heading>

      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <List products={products} />
      )}
    </HomeContainer>
  );
};

export default Home;


// Styled Components
const HomeContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const Heading = styled.h1`
  color: #333;
  text-align: center;
`;

const LoadingText = styled.p`
  text-align: center;
  color: #007bff;
  font-size: 1.5rem;
`;

const ErrorText = styled.p`
  text-align: center;
  color: red;
  font-size: 1.5rem;
`;