import mealsImage from '../../assets/mealsImage.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    const { onShowCart } = props;
    return <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    </>
}

export default Header