import { Button, Card } from 'react-bootstrap';
import './App.css';
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../features/cartProductSlice';

const ProductCard = ({ id, product }) => {
  const cartItem = useSelector((item) => item.cart);

  const Dispatch = useDispatch();
  return (
    <div
      className='products'
      key={id}
    >
      <Card>
        <Card.Img
          variant='top'
          src={product.image}
          alt={product.name}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {product.price.split('.')[0]}</span>
            <div>Delivery Time : {product.fastDelivery ? <span>1 - 2 Day(s)</span> : <span>Around 7 Days</span>}</div>
            <Rating rating={product.ratings} />
          </Card.Subtitle>

          {cartItem.some((item) => item.id === product.id) ? (
            <Button
              onClick={() => Dispatch(REMOVE_FROM_CART(product.id))}
              variant='danger'
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => Dispatch(ADD_TO_CART(product))}
              disabled={!product.inStock}
            >
              {!product.inStock ? 'Out of Stock' : 'Add to cart'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
