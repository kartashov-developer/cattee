import React, { useState } from 'react';

import { Input } from '../../common/fields';
import { Button } from '../../common/buttons';

import classes from './LoginPage.module.css';

export function LoginPage() {
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.container_header}>CATTEE</div>
        <div className={classes.container_form}>
          <div className={classes.container_form_input}>
            <Input
              placeholder="Username"
              value={formValues.username}
              helperText="Problem"
              name="username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValues({ ...formValues, username });
              }}
              isError
            />
            <Input
              isError
              placeholder="Password"
              value={formValues.password}
              helperText="Problem"
              name="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password });
              }}
            />
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>

        <div className={classes.signup_container}>
          Create new account
        </div>
      </div>
    </div>
  );
}
