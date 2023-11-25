// import { CartState } from './../context/Context';
import Filters from './Filters';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import './App.css';

const Home = () => {
  const Product = useSelector((val) => val.Product);
  // console.log(Product);
  // const {
  //   state: { products },
  //   filterState: { sort, byStock, byFastDelivery, byRating, searchQry },
  // } = CartState();

  // const transformProducts = () => {
  //   let sortedProducts = products;
  //   if (sort) {
  //     sortedProducts = sortedProducts.sort((a, b) => (sort === 'lowToHigh' ? a.price - b.price : b.price - a.price));
  //   }
  //   if (!byStock) {
  //     sortedProducts = sortedProducts.filter((product) => product.inStock);
  //   }
  //   if (byFastDelivery) {
  //     sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
  //   }
  //   if (byRating) {
  //     sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating);
  //   }
  //   if (searchQry) {
  //     sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQry.toLowerCase()));
  //   }

  //   return sortedProducts;
  // };

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {Product.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
