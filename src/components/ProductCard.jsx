import { Button, Card } from 'react-bootstrap';
import './productCard.css';
import Rating from './Rating';

const ProductCard = ({ key, product }) => {
  console.log(product);
  return (
    <div
      className='products'
      key={key}
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
          <Button variant='danger'>Remove from cart</Button>
          <Button disabled={!product.inStock}>{!product.inStock ? 'Out of Stock' : 'Add to cart'}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
