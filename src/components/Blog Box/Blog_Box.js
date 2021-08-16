import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './blogbox_styles.css';
import convertTime from '../../Helpers/TimeConverter';

export default function BlogBox({ title, date, content, image, author, id }) {
  return (
    <div className='blogBox-container'>
      <div className='heading'>
        <img id='heading-img' src={image} alt='context-img' />
        <div className='heading-content'>
          <h1 id='title'>{title}</h1>
          <h2 id='date'>{convertTime(date)}</h2>
        </div>
      </div>
      <div className='blog-preview px-4'>
        <div className='author flex py-3'>
          <AccountCircleIcon fontSize='medium' />
          <p className='pl-2'>{author}</p>
        </div>

        <h3 id='content'>{content}</h3>
        <Link to={`blog/${id}`}>
          <p className='read-more-link my-2'>
            Read More <ChevronRightIcon />
          </p>{' '}
        </Link>
      </div>
    </div>
  );
}
