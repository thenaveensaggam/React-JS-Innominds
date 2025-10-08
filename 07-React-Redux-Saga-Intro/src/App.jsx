import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./components/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Users from "./pages/Users.jsx";
import UserItem from "./pages/UserItem.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/users/:userId"} element={<UserItem />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
