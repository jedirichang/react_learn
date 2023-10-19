import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {
  const meals = useSelector(state => state.meals.items);
  console.log(meals);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {meals.map(meal => <ProductItem
          key={meal.id}
          id={meal.id}
          title={meal.name}
          price={meal.price}
          description={meal.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
