import React from 'react';
import { Link } from 'react-router-dom';
const Button = (props) => {
  return (
    <Link
      to='/'
      style={{ background: props.color, opacity: '0.8' }}
      className='p-2 rounded main-link'
    >
      {props.text}
    </Link>
  );
};

export default Button;
