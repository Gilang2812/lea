/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"


const NavItem = ({ Icon, label, link }) => {
    return (
        <li className="flex items-center gap-2">
            <Icon />   <NavLink className={({ isActive }) => (isActive ? 'text-red-500' : '')} to={link}> {label} </NavLink>
        </li>)
}

export { NavItem }