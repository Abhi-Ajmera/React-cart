import Filters from './Filters';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import './App.css';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const Product = useSelector((val) => val.Product);
  const { byStock, byFastDelivery, byRating, searchQuery } = useSelector((val) => val.filter);

  const transformProducts = () => {
    let sortedProducts = Product;
    if (!byStock) {
      sortedProducts = sortedProducts.filter((product) => product.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return sortedProducts;
  };

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {transformProducts().map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            product={product}
          />
        ))}
      </div>
      <button
        className='backToTop'
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
};

export default Home;
