import React from 'react';
import {observer} from 'mobx-react-lite';

import cls from './CountryItem.module.css';
import {Link} from 'react-router-dom';
import ButtonRemAdd from '../../UI/buttons/ButtonRemAdd';
import FavoriteCountries from '../../../store/favoriteCountries';
import {truncate} from '../../../utils/sortCountries'

const CountryItem = observer(({country,itemsSize,removeCountry}) => {


  return (
    <div className={itemsSize ? cls.card : cls.card_theme}>
      <div className={itemsSize ? cls.hover : cls.hover_theme}>
        <img className={itemsSize ? cls.flag : cls.flag_theme} src={country.flags.png} />
        <Link 
          to={`/`+ country.name.common} 
          country={country} 
          className={itemsSize ? cls.name : cls.name_theme}
        >
          {truncate(country.name.common,20)}
        </Link>
      </div>
      <div className={itemsSize ? cls.buttons_container : cls.buttons_container_theme}>
        <ButtonRemAdd onClick={() => removeCountry(country)} func={'remove'}>Удалить</ButtonRemAdd>
        <ButtonRemAdd onClick={() => FavoriteCountries.addFavoriteCountry(country.name.common)} func={'add'}>Добавить</ButtonRemAdd>
      </div>
    </div>
  )
})

export default CountryItem
