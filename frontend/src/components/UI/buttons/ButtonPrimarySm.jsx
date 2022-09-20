import React from 'react';
import cls from './UiButtons.module.css';

const ButtonPrimarySm = ({children,activ, ...props}) => {
  return (
    <button {...props} className={activ ? cls.button_primary_sm + ' ' + cls.activ : cls.button_primary_sm}>
      {children}
    </button>
  );
}

export default ButtonPrimarySm;
