import React from 'react';
import classes from './UiButtons.module.css';

const ButtonPrimaryMd = ({children, ...props}) => {
  return (
    <button {...props} className={classes.button_primary_md}>
      {children}
    </button>
  );
}

export default ButtonPrimaryMd;
