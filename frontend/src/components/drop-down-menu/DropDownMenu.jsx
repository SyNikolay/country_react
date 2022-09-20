import React from 'react';
import cls from './DropDownMenu.module.css';
import FavoriteCountries from '../../store/favoriteCountries';

const DropDownMenu = ({isActiv,setIsActiv, country}) => {
  
  return (
    <div className={isActiv ? cls.menu_container : cls.visually_hidden}>
      <div onClick={() => {FavoriteCountries.addFavoriteCountry(country.name.common); setIsActiv(false)}} className={cls.menu_button}>Хочу поехать</div>
      <div onClick={() => {FavoriteCountries.addWantVIsitedCountry(country.name.common); setIsActiv(false)}} className={cls.menu_button}>Уже ездил</div>
      <div onClick={() => {FavoriteCountries.addNotVIsitedCountry(country.name.common); setIsActiv(false)}} className={cls.menu_button}>Не поеду</div>
    </div>
  )
}

export default DropDownMenu
