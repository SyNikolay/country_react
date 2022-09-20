import React, {useState} from 'react';
import cls from './Select.module.css';
import arrow from './img/select_arrow.png';

const Select = ({placeholder, size, options, onClick, style}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [curValue, setCurValue] = useState(placeholder);

  if (size === 'sm') size = cls.sm;
  if (size === 'md') size = cls.md;
  if (size === 'lg') size = cls.lg;

  function toogleSelect() {
    setIsOpen(!isOpen);
  }

  function changeOption(option) {
    if (onClick) onClick(option.value);
    setCurValue(option.innerHTML)
    setIsOpen(!isOpen);
  }

  return (
    <div style={style} className={size}>
      <div className={cls.select__input} onClick={() => toogleSelect()}>
        {curValue}
        <img src={arrow} className={isOpen ? cls.arrow : cls.arrow + ' ' + cls.arrow_open } />
      </div>
      <div className={isOpen ? cls.select__dropdown : cls.select__dropdown + ' ' + cls.open }>
        {options.map(option => 
          <option
            key={option.value}
            value={option.value}
            className={cls.select__option}
            onClick={e => changeOption(e.target)}
          >{option.title}</option>
        )}
      </div>
    </div>
  )
}

export default Select
