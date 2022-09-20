import React from 'react';
import cls from './MyPageInfo.module.css';
import ButtonRemAdd from '../UI/buttons/ButtonRemAdd';
import FavoriteCountries from '../../store/favoriteCountries';
import {observer} from 'mobx-react-lite';
import {truncate} from '../../utils/sortCountries';

const MyPageInfo = observer(({favoriteCounteriesData,title,onClick,setDragItem,dragItem}) => {
  let dropElem;
  const dragStartHandler = (e) => {
    setDragItem(e.target)
  }
  const dragOvertHandler = (e) => {
    e.preventDefault();
    dropElem = e.target;
  }
  const dropHandler = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('container-list')) {
      dropElem.append(dragItem)
    }
  }

  return (
    <div 
      onDrop={(e) => dropHandler(e)} 
      onDragOver={(e) => dragOvertHandler(e)} 
      className={`${cls.countries_list} container-list`}
    >
      <h3 className={cls.title}>{title}</h3>
      <div className={cls.countries_container}>
        {favoriteCounteriesData.map(c => 
          <div 
            key={c.name.common} 
            className={cls.country_item}
            draggable={true}
            onDragStart={(e) => dragStartHandler(e)}
            >
            <img className={cls.flag} src={c.flags.png} />
            <p className={cls.country_name}>{truncate(c.name.common,20)}</p>
            <ButtonRemAdd
              func={'remove'}
              style={{background:'#fff'}}
              onClick={() => onClick(c.name.common)}
            >Удалить</ButtonRemAdd>
          </div>
        )}
      </div>
    </div>
  )
})

export default MyPageInfo
