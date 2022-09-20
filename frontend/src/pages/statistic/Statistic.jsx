import React from 'react';
import cls from './Statistic.module.css';
import Select from '../../components/UI/select/Select'

const NotFound = () => {
  function handler() {
    console.log('handler');
  }
  return (
    <div style={{padding:'30px'}} className={cls.statistic_page}>
      <Select
        placeholder={'Select'}
        size={'sm'}
        options={[
          {value:'first', title:'First title'},
          {value: 'second', title: 'Second title'}
        ]}
        onClick={handler}
      />
    </div>
  )
}

export default NotFound
