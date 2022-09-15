import React from 'react';
import cls from './MyPageInfo.module.css';
import ButtonRemAdd from '../UI/buttons/ButtonRemAdd';
import FavoriteCountries from '../../store/favoriteCountries';

const MyPageInfo = ({favoriteCounteriesData,title}) => {
  return (
    <div className={cls.countries_list}>
      <h3 className={cls.title}>{title}</h3>
      <div className={cls.countries_container}>
        {favoriteCounteriesData.map(c => 
          <div key={c.name.common} className={cls.country_item}>
            <img className={cls.flag} src={c.flags.png} />
            <p className={cls.country_name}>{c.name.common}</p>
            <ButtonRemAdd
              func={'remove'}
              style={{background:'#fff'}}
              onClick={() => FavoriteCountries.removeFavoriteCountry(c.name.common)}
            >Удалить</ButtonRemAdd>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyPageInfo
