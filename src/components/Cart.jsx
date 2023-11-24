import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../features/cartProductSlice';

const Cart = () => {
  const cart = useSelector((val) => val.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(cart.reduce((acc, val) => acc + Number(val.price), 0));
  }, [cart]);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((product) => (
            <ListGroup.Item key={product.id}>
              <Row>
                <Col md={3}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={3}>
                  <span>{product.name}</span>
                </Col>
                <Col md={2}>
                  <span>₹ {product.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={product.ratings} />
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => dispatch(REMOVE_FROM_CART(product.id))}
                  >
                    <AiFillDelete fontSize='20px' />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal of {cart.length} items</span>
        <span>Total: ₹{total}</span>
        <Button
          type='button'
          disabled={cart.length === 0}
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
