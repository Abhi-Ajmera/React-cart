import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import './Header.css';

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar
      bg='dark'
      variant='dark'
      style={{ height: 80 }}
    >
      <Container>
        <Navbar.Brand>
          <Link href='/'>astores</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='search a product'
            className='m-auto'
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
                        onClick={() => {
                          dispatch({ type: 'REMOVE_FROM_CART', payload: product });
                        }}
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
