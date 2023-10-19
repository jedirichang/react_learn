import { NavLink, useNavigate } from "react-router-dom"
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }
    return <header>
        <nav>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? classes.active : undefined} end to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
        <button onClick={navigateHandler}>Click me</button>
    </header>
}

export default MainNavigation;