import React, {useState, useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import FavoriteCountries from '../../store/favoriteCountries';
import {Countries} from '../../context/index';
import MyPageInfo from '../../components/my-page/MyPageInfo'

import cls from './MyPage.module.css'

const MyPage = observer(() => {
  const [dragItem, setDragItem] = useState(null)
  const {countries} = useContext(Countries); 
  const favoriteCounteriesData = [];
  const wantVisitedCounteriesData = [];
  const notVisitedCounteriesData = [];

  countries.forEach((el) => {
    if (FavoriteCountries.countries.includes(el.name.common)) {
      favoriteCounteriesData.push(el)
    }
    if (FavoriteCountries.favorite.includes(el.name.common)) {
      wantVisitedCounteriesData.push(el)
    }
    if (FavoriteCountries.notVisited.includes(el.name.common)) {
      notVisitedCounteriesData.push(el)
    }
  })

  const removeCountry = (name) => {
    FavoriteCountries.removeFavoriteCountry(name)
  }
  const removeVisitedCountry = (name) => {
    FavoriteCountries.removeVisitedCountry(name)
  }
  const removeNotWantCountry = (name) => {
    FavoriteCountries.removeNotWantCountry(name)
  }

  return (
    <div className={cls.my_page}>
      <MyPageInfo 
        favoriteCounteriesData={favoriteCounteriesData}
        title={'Хочу посетить'}
        onClick={removeCountry}
        setDragItem={setDragItem}
        dragItem={dragItem}
      />
      <MyPageInfo 
        favoriteCounteriesData={wantVisitedCounteriesData}
        title={'Посещал'}
        onClick={removeVisitedCountry}
        setDragItem={setDragItem}
        dragItem={dragItem}
      />
      <MyPageInfo 
        favoriteCounteriesData={notVisitedCounteriesData}
        title={'Никогда не поеду'}
        onClick={removeNotWantCountry}
        setDragItem={setDragItem}
        dragItem={dragItem}
      />
    </div>
  )
})

export default MyPage
