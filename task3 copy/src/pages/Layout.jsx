import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="home">Home</Link> 
         <Link to="insert">Insert</Link> 
          <Link to="display">Display</Link> 
          <Link to="update">Update</Link> 
           <Link to="search">Search</Link>
      </nav>
      <hr />
      <Outlet />
      <hr />
    </>
  );
};

export default Layout;
