import React from 'react';
import { useContext } from 'react';
import { blogContext } from '../../App';
import { Link } from 'react-router-dom';
import './blogpage_styles.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useParams } from 'react-router';

export default function BlogPage() {
  const { id } = useParams();
  const blogs = useContext(blogContext);

  return (
    <div>
      {blogs
        .filter((blog) => blog.id === id)
        .map((blog) => {
          return (
            <div className='blogpage-container' key={blog.id}>
              <div className='heading-title w-full mx-auto'>
                <img src={blog.image} alt='' />
              </div>
              <div className='blogpage-content w-11/12 mx-auto py-20'>
                <h1 className='font-bold'>{blog.title}</h1>
                <h2 className='py-4 font-bold'>
                  <AccountCircleIcon fontSize='medium' />
                  {blog.author}
                </h2>
                <p className='w-4/5 py-8'>{blog.content}</p>
                <Link to='/'>
                  <ChevronLeftIcon /> Back{' '}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
