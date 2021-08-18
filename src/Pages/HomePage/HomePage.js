import React from 'react';
import { useContext } from 'react';
import { blogContext } from '../../App';
import RecentBlog from '../../components/Recent Blog/RecentBlog';
import BlogBox from '../../components/Blog Box/Blog_Box';
import '../../stylesheets/homepage_styles.css';

export default function HomePage() {
  const blogs = useContext(blogContext);

  return (
    <div>
      <RecentBlog blogs={blogs.slice(-1)} />
      <div className='wave-upper'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 90 1440 220'>
          <path
            fill='#0099ff'
            fillOpacity='1'
            d='M0,288L80,266.7C160,245,320,203,480,208C640,213,800,267,960,256C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='blog-collection w-full mx-auto'>
        <h2 className='font-semibold py-4 text-3xl w-11/12 mx-auto'>
          Blog Collection
        </h2>
        <div className='blogs-container py-5 w-11/12 mx-auto flex flex-wrap justify-center gap-4 md:justify-between'>
          {blogs.map((blog) => {
            return (
              <BlogBox
                key={blog.title}
                title={blog.title}
                content={blog.content}
                date={blog.date_posted.seconds}
                image={blog.image}
                author={blog.author}
                id={blog.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
