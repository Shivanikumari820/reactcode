import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Insert from "./pages/insert.jsx";       
import Display from "./pages/Display.jsx";
import Search from "./pages/Search.jsx";
import Update from "./pages/Update.jsx";
import TotalQty from "./pages/TotaLQty.jsx";  


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
   
        <Route path="contact" element={<Contact />} />
        <Route path="insert" element={<Insert />} />
        <Route path="display" element={<Display />} />
        <Route path="search" element={<Search />} />
        <Route path="update" element={<Update />} />
        <Route path="totalqty" element={<TotalQty />} />
      </Route>
    </Routes>
  );
};

export default App;
