import './stylesheets/homepage_styles.css';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import BlogPage from './Pages/Blog Page/BlogPage';
import NavLogo from './components/NavLogo';
import getBlogs from './Helpers/fetchBlogs';
import Loading from './components/Loading';

function App() {
  let [blogs, setBlogs] = useState([]);
  let [fetching, setFetching] = useState(true);

  useEffect(() => {
    let blogCollection = getBlogs();
    // Allows loading Animation to play
    setTimeout(() => {
      setBlogs(blogCollection);
      setFetching(false);
    }, 800);
  }, [fetching]);

  return (
    <div className='App'>
      <NavLogo></NavLogo>
      {fetching ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path='/'>
            <HomePage blogs={blogs} />
          </Route>
          <Route exact path='/blog/:id'>
            <BlogPage blogs={blogs} />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
