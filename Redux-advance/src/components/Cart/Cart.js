import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map(item => <CartItem
          item={{ title: item.title, quantity: item.quantity, total: item.totalAmount, price: item.price, id: item.id }}
        />)}

      </ul>
    </Card>
  );
};

export default Cart;
