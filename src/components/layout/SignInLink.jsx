import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => {
  return (
    <div>
      <ul className='right'>
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><NavLink to="/signin">Log Out</NavLink></li>
        <li className='btn-floating btn-large waves-effect waves-light brown'>NN</li>
      </ul>
    </div>
  )
}

export default SignInLink
