/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import PasswordShowIcon from '../../../../assets/password-show.svg';
import PasswordHideIcon from '../../../../assets/password-hide.svg';

import classes from '../Input/Input.module.css';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  isError?: boolean;
  helperText?: string;
}

export const PasswordInput: React.FC<InputProps> = ({
  isError = false,
  helperText,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = value;

  return (
    <div className={classes.input_container}>
      <input
        className={`${classes.input} ${isError ? classes.input_error : ''}`}
        value={value}
        type={showPasswordToggle && showPassword ? 'text' : 'password'}
        {...props}
      />
      {/* isError+helperText=true -> show helper_text */}
      {isError && helperText && (
        <div className={classes.input_helper_text}>{helperText}</div>
      )}
      {/* TODO: aria-hidden */}
      {showPasswordToggle && (
        <div
          className={classes.password_toggle_container}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <img
              className={classes.image_password_container}
              src={PasswordHideIcon}
              alt="Hide Password Icon"
            />
          ) : (
            <img
              className={classes.image_password_container}
              src={PasswordShowIcon}
              alt="Show Password Icon"
            />
          )}
        </div>
      )}
    </div>
  );
};
