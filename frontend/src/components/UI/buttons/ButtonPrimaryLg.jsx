import React from 'react';
import classes from './UiButtons.module.css';

const ButtonPrimaryLg = ({children, ...props}) => {
  return (
    <button {...props} className={classes.button_primary_lg}>
      {children}
    </button>
  );
}

export default ButtonPrimaryLg;
