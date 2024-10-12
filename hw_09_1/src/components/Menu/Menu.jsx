import { NavLink } from "react-router-dom";
import './Menu.css';

export default function Menu() {
    const active = ({ isActive }) => (isActive ? "Menu__item-link Menu__item-link-active" : "Menu__item-link")
    return (
        <nav>
            <ul className="Menu">
                <li className="Menu__item">
                    <NavLink className={active} to="/">главная</NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink className={active} to="/drift">дрифт-такси</NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink className={active} to="/timeattack">time attack</NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink className={active} to="/forza">forza karting</NavLink>
                </li>
            </ul>
        </nav>
    );
}