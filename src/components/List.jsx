import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = ({ products }) => {
  return (
    <ListContainer>
      {products.map((product) => (
        <ListItem key={product.id}>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            {/* Display the product image */}
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </Link>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default List;

// Styled Components
const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(90%);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; /* This will maintain the aspect ratio of the image and fill the container */
  border-radius: 8px;
  margin-bottom: 15px; /* Space between image and text */
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #555;
  font-size: 1rem;
  margin: 10px 0;
  
  /* Truncate the description if it's too long */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  color: #007bff;
  font-size: 1.2rem;
  font-weight: bold;
`;
