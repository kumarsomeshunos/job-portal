import React from 'react';
import Button from './Button';

const Login = () => {
  return (
    <div className='main-form-div'>
      <div className='form-bg'>
        <div className='img-muj'>
          <img src='images/manipal-logo.png' alt='' />
        </div>
        <div className='line'></div>
        <div className='log-form'>
          <form action=''>
            <h3>Admin Portal</h3>
            <input
              type='text'
              placeholder='Enter Username'
              className='log-input'
            />
            <input
              type='password'
              placeholder='Enter Password'
              className='log-input'
            />
            <div className="btn-container">
            <button type="submit" className="btn">
                <a href="/admin/dashboard">Log In</a>
              </button>
              <button type="button" className="btn">
                Forgot Password?
              </button>
              <Button color={'yellow'} text={'forgot password'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
