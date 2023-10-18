import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggleValue = useSelector(state => state.counter.showCounter);

  const increamentHandler = () => { dispatch(counterActions.increment()) };
  const increaseHandler = () => { dispatch(counterActions.increase(10)) }
  const decrementHandler = () => { dispatch(counterActions.decrement()) };
  const toggleHandler = () => { dispatch(counterActions.toggle()) };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleValue && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler} style={{ marginRight: '20px' }}>Increament</button>
        <button onClick={increaseHandler} style={{ marginRight: '20px' }}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main >
  );
};

export default Counter;
