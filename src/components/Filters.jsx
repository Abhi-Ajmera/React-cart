import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {
  const {
    filterState: { byStock, byFastDelivery, byRating, sort },
    filterDispatch,
  } = CartState();
  // console.log(byStock, byFastDelivery, byRating, sort);

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
          onChange={() =>
            filterDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'lowToHigh',
            })
          }
          checked={sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Decending'
          name='group1'
          type='radio'
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'highToLow',
            })
          }
          checked={sort === 'highToLow' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
          onChange={() =>
            filterDispatch({
              type: 'FILTER_BY_STOCK',
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Fast Delivery Only'
          name='group1'
          type='checkbox'
          id={`inline-4`}
          onChange={() =>
            filterDispatch({
              type: 'FILTER_BY_DELIVERY',
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating :</label>
        <Rating
          rating={byRating}
          onClick={(i) => filterDispatch({ type: 'FILTER_BY_RATING', payload: i })}
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Button
        variant='light'
        onClick={() => filterDispatch({ type: 'CLEAR_FILTER' })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
