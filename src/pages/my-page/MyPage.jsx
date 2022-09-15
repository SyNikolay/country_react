import React, {useState, useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import FavoriteCountries from '../../store/favoriteCountries';
import {Countries} from '../../context/index';
import MyPageInfo from '../../components/my-page/MyPageInfo'

import cls from './MyPage.module.css'

const MyPage = observer(() => {
  const {countries} = useContext(Countries); 
  const favoriteCounteriesData = [];
  
  countries.forEach((el) => {
    if (FavoriteCountries.countries.includes(el.name.common)) {
      favoriteCounteriesData.push(el)
    }
  })

  return (
    <div className={cls.my_page}>
      <MyPageInfo 
        favoriteCounteriesData={favoriteCounteriesData}
        title={'Хочу посетить'}
      />
      <MyPageInfo 
        favoriteCounteriesData={favoriteCounteriesData}
        title={'Посещал'}
      />
      <MyPageInfo 
        favoriteCounteriesData={favoriteCounteriesData}
        title={'Никогда не поеду'}
      />
    </div>
  )
})

export default MyPage
