import { Button, Card } from 'react-bootstrap';
import './App.css';
import Rating from './Rating';
// import { CartState } from '../context/Context';

const ProductCard = ({ id, product }) => {
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();
  // console.log(cart);

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
          {/* {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() => {
                dispatch({ type: 'REMOVE_FROM_CART', payload: product });
              }}
              variant='danger'
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: product });
              }}
              disabled={!product.inStock}
            >
              {!product.inStock ? 'Out of Stock' : 'Add to cart'}
            </Button>
          )} */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
