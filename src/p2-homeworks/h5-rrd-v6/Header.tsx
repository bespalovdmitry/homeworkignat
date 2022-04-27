import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './HW5.module.css'

function Header() {
    return (
        <header className={s.header}>
            <nav>
                <div>
                    <NavLink className={s.menuItems} to={'/pre-junior'}>Pre-Junior</NavLink>
                </div>
                <div>
                    <NavLink className={s.menuItems} to={'/junior'}>Junior</NavLink>
                </div>
                <div>
                    <NavLink className={s.menuItems} to={'/junior-plus'}>Junior-Plus</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
