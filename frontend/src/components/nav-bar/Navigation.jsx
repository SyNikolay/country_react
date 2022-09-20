import React from 'react'
import {NavLink} from 'react-router-dom'
import cls from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={cls.nav_menu}>
      <NavLink className={cls.nav_link} to="/">Главная</NavLink>
      <NavLink className={cls.nav_link} to="/my-page">Моя страница</NavLink>
      <NavLink className={cls.nav_link} to="/statistic">Статистика</NavLink>
    </nav>
  )
}

export default Navigation
