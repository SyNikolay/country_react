import React from 'react';
import cls from './ButtonRemAdd.module.css'

const ButtonRemAdd = ({children,func, ...props}) => {
  return (
    <button
      className={func === 'remove' ? cls.button_remove : cls.button_add}
      {...props}
    >{children}
    </button>
  )
}

export default ButtonRemAdd
