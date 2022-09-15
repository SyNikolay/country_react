import React from 'react'
import cls from './Select.module.css';

const Select = ({defaultVal,options,value,onChange}) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultVal}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  )
}

export default Select
