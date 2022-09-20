import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Link} from 'react-router-dom';

import cls from './CountryItem.module.css';

import ButtonRemAdd from '../../UI/buttons/ButtonRemAdd';
import DropDownMenu from '../../drop-down-menu/DropDownMenu'
import {truncate} from '../../../utils/sortCountries';

const CountryItem = observer(({country,itemsSize,removeCountry}) => {
  const [isActiv, setIsActiv] = useState(false)

  return (
    <div onMouseLeave={() => setIsActiv(false)} className={itemsSize ? cls.card : cls.card_theme}>
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
        <div className={cls.drop_down_button}>
          <ButtonRemAdd onClick={() => setIsActiv(true)} func={'add'}>Добавить</ButtonRemAdd>
          <DropDownMenu  isActiv={isActiv} setIsActiv={setIsActiv} country={country}/>
        </div>
      </div>
    </div>
  )
})

export default CountryItem
