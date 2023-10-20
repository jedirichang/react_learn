import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink style={({ isActive }) => { return isActive ? { color: 'red' } : { color: '' } }} to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => { return isActive ? { color: 'red' } : { color: '' } }} to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
