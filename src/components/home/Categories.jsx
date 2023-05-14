import { Button, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

const Nav = styled('nav')`
  display: flex;
  flex-direction: column;
  background-color: #f0f5fa;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b4b4b;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;


  
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d2e2f5;
    transform: scale(1.05);
  }
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" style={{ margin: '20px', width: '85%', backgroundColor: '#6495ED', color: '#fff' }}>
          Create Blog
        </Button>
      </Link>

      <Nav>
        <StyledLink to={"/"}>All Categories</StyledLink>
        {categories.map((category) => (
          <StyledLink key={category.id} to={`/?category=${category.type}`}>
            {category.type}
          </StyledLink>
        ))}
      </Nav>
    </>
  )
}

export default Categories;
