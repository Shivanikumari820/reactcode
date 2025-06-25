
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="nav-box">
        <Link to="/home">Home</Link> <span>|</span>
        <Link to="/insert">Insert</Link> <span>|</span>
        <Link to="/display">Display</Link> <span>|</span>
        <Link to="/search">Search</Link> <span>|</span>
        <Link to="/update">Update</Link> <span>|</span>
        <Link to="/totalqty">Total Qty</Link> <span>|</span>
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Outlet />
      <hr />
    </>
  );
};

export default Layout;
