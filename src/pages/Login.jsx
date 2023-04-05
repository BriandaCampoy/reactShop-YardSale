import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo_main from '@logos/logo_yard_sale.svg';

function Login() {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    };
    console.log(data);
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={logo_main} alt="logo" className="logo" />

        <form action="/" className="form" ref={form} onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Email adress
          </label>
          <input
            type="text"
            name="email"
            placeholder="Example@gmail.com"
            className="input input-email"
            required
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            className="input input-password"
            required
          />

          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
