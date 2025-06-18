import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; 

const Layout = () => {
  return (
    <>
      <nav className="nav-box">
        <Link to="/home">Home</Link>   <span>|</span>
        <Link to="/about">About</Link> <span>|</span>
        <Link to="/contact">Contact</Link>  <span>|</span>
        <Link to="/faculty">Faculty</Link>  <span>|</span>
        <Link to="/courses">Courses</Link>  
      </nav>

      <hr />
      <Outlet />
      <hr />
     
    </>
  );
};

export default Layout;
