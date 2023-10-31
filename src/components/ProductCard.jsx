import './productCard.css';

const ProductCard = ({ key, product }) => {
  return (
    <div key={key}>
      <span>{product.name}</span>
    </div>
  );
};

export default ProductCard;
