import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLogo() {
  return (
    <div className='w-11/12 flex mx-auto py-5 text-2xl'>
      <Link to='/'>
        <h1 className='logo font-bold'>rBlogs</h1>
      </Link>
    </div>
  );
}
