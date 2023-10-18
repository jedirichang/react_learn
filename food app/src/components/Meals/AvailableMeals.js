import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(async () => {
        try {
            setLoading(true);
            const response = await fetch('https://taxi-241619.firebaseio.com/meals.json')
            const responseData = await response.json();
            const loadedMeals = [];
            for (let key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals);
        }
        catch (e) {
            alert('error in api')
        }
        setLoading(false);
    }, [])
    const mealsList = meals.map(meal => <li key={meal.id}><MealItem meal={meal} /></li>)
    return <section className={classes.meals}>
        {isLoading && <p>Loading delicious meals</p>}
        {!isLoading && meals.length === 0 && < p >No Meals at this time</p>
        }
        <ul>
            {!isLoading && meals.length > 0 && < Card >
                {mealsList}
            </Card>}
        </ul>
    </section >
}

export default AvailableMeals;