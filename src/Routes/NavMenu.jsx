import React from 'react'
import {NavLink} from "react-router-dom"

const NavMenu = () => {
  return (
<>
    <li>
        <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone4">Iphone</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone1">Samsung</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone2">Xiaomi</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone5">Nokia</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone3">Motorola</NavLink>
    </li>
</>
)
}

export default NavMenu