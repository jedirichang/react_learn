import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';
const HeaderCartButton = props => {

    const [btnIsHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount }, 0);

    useEffect(() => {
        if (!cartCtx.items.length) {
            return;
        }
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;