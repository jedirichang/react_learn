import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';
const MealItem = props => {
    const { meal } = props;

    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({ id: meal.id, name: meal.name, amount, price: meal.price })
    };
    return <>
        <div className={classes.meal}>
            <h3>{meal.name}</h3>
            <p className={classes.description}>{meal.description}</p>
            <p className={classes.price}>${meal.price}</p>
        </div>
        <div><MealItemForm onAddToCart={addToCartHandler} /></div>
    </>
}

export default MealItem;