import React from 'react'

import '../../styles/css/header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={'header'}>
            <NavLink to='/lab1' className="header_item"><span >Lab 1</span></NavLink>
            <NavLink to='/lab2' className="header_item"><span >Lab 2</span></NavLink>
            <NavLink to='/lab3' className="header_item"><span >Lab 3</span></NavLink>
            <NavLink to='/lab4' className="header_item"><span >Lab 4</span></NavLink>
            <NavLink to='/lab5' className="header_item"><span >Lab 5</span></NavLink>
            <NavLink to='/lab6' className="header_item"><span >Lab 6</span></NavLink>
            <NavLink to='/lab7' className="header_item"><span >Lab 7</span></NavLink>
            <NavLink to='/lab8' className="header_item"><span >Lab 8</span></NavLink>
            <NavLink to='/lab9' className="header_item"><span >Lab 9</span></NavLink>

        </div>
    )
}

export default Header