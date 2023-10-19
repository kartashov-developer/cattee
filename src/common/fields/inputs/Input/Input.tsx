import React from 'react';

import './Input.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = (
  { isError = false, helperText, ...props },
) => {
  // isError true ->  className add 'input_error'
  const className = isError ? 'input input_error' : 'input';

  return (
    <div>
      <input className={className} {...props} />

      {/* isError+helperText=true -> show helperText */}
      {isError && helperText && <div className="input_helperText">{helperText}</div>}
    </div>
  );
};
