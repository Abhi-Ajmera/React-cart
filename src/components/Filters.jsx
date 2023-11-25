import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import {
  SORT_PRICE,
  FILTER_BY_STOCK,
  FILTER_BY_DELIVERY,
  FILTER_BY_RATING,
  CLEAR_FILTER,
} from '../features/filterProduct';
import { SORT_BY_PRICE, CLEAR_PRICE } from '../features/ProductSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((val) => val.filter);

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label='Ascending'
          name='group1'
          type='radio'
          id={`inline-1`}
          onChange={() => dispatch(SORT_BY_PRICE('lowToHigh')) && dispatch(SORT_PRICE('lowToHigh'))}
          checked={filter.sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Decending'
          name='group1'
          type='radio'
          id={`inline-2`}
          onChange={() => dispatch(SORT_BY_PRICE('highToLow')) && dispatch(SORT_PRICE('highToLow'))}
          checked={filter.sort === 'highToLow' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
          onChange={() => dispatch(FILTER_BY_STOCK(!filter.byStock))}
          checked={filter.byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Fast Delivery Only'
          name='group1'
          type='checkbox'
          id={`inline-4`}
          onChange={() => dispatch(FILTER_BY_DELIVERY(!filter.byFastDelivery))}
          checked={filter.byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating :</label>
        <Rating
          rating={filter.byRating}
          onClick={(e) => dispatch(FILTER_BY_RATING(e))}
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Button
        variant='light'
        onClick={() => dispatch(CLEAR_FILTER()) && dispatch(CLEAR_PRICE())}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
