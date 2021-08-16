import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './recentBlog_styles.css';
import moment from 'moment';

export default function RecentBlog({ blogs }) {
  let blog = blogs[0];
  let t = new Date(blog.date_posted.seconds * 1000);
  let FormattedDate = moment(t).startOf('hour').fromNow();

  return (
    <div className='w-full'>
      <div className='w-11/12 mx-auto flex items-center justify-around flex-wrap-reverse md:pt-36'>
        <div className='title-container'>
          <h1 className='font-bold'>Recent Blog</h1>
          <h2 className='font-semibold'>{FormattedDate}</h2>
        </div>
        {/* Content */}
        <div className='featured-blog w-96'>
          <img id='recent-img' src={blog.image} alt='img-context' />
          <div className='recent-preview'>
            <h1>{blog.title}</h1>
            <Link to={`blog/${blog.id}`}>
              <p className='recent-read-more'>
                Read More <ChevronRightIcon />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
