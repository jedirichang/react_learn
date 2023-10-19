import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cart = useSelector(state => state.cart.items);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.reduce((curr, acc) => curr + acc.quantity, 0)}</span>
    </button>
  );
};

export default CartButton;
