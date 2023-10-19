import React, { useState } from 'react';
import './LoginPage.css';

import { Input } from '../../common/fields';

export function LoginPage() {
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  return (
    <div className="login-page">
      <div className="login-page_container">
        <div>header</div>
        <div className="login-page_form_container">
          <div>
            <Input
              placeholder="username"
              value={formValues.username}
              name="username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, username: event.target.value });
              }}
              isError
              helperText="sorry"
            />
          </div>
          <div>
            <Input
              placeholder="password"
              value={formValues.password}
              name="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, password: event.target.value });
              }}
            />
          </div>
          <div>
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
