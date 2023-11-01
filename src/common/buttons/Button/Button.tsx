import React from 'react';

import classes from './Button.module.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="submit" className={classes.button}>
      {children}
    </button>
  );
};
