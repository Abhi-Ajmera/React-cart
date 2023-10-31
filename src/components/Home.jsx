import { CartState } from './../context/Context';
import Filters from './Filters';
import ProductCard from './ProductCard';
import './home.css';

const Home = () => {
  const {
    state: { products },
  } = CartState();

  // console.log(products);

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
