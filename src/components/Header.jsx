import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../features/cartProductSlice';
import { FILTER_BY_SEARCH } from '../features/filterProduct';

const Header = () => {
  const cart = useSelector((e) => e.cart);
  const filter = useSelector((e) => e.filter);
  const dispatch = useDispatch();

  return (
    <Navbar
      bg='dark'
      variant='dark'
      style={{ height: 80 }}
    >
      <Container>
        <Navbar.Brand>
          <Link to='/'>astores</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='search a product'
            className='m-auto'
            onChange={(e) => dispatch(FILTER_BY_SEARCH(e.target.value))}
            value={filter.searchQuery}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align='end'>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart
                color='white'
                fontSize='25px'
              />
              <Badge bg='inherit'>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <span
                      className='cartItem'
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        className='cartItemImg'
                        alt={product.name}
                      />
                      <div className='cartItemsDetail'>
                        <span>{product.name}</span>
                        <span>₹ {product.price.split('.')[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize='25'
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(REMOVE_FROM_CART(product.id))}
                      />
                    </span>
                  ))}
                  <Link to='/cart'>
                    <Button style={{ width: '95%', margin: '0 10px' }}>Go to Cart</Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
