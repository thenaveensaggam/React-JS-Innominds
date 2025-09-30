import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdminContact from "./pages/contacts/AdminContact";
import AddContact from "./pages/contacts/AddContact";
import EditContact from "./pages/contacts/EditContact";
import ViewContact from "./pages/contacts/ViewContact";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts/admin" element={<AdminContact />} />
            <Route path="/contacts/add" element={<AddContact />} />
            <Route path="/contacts/edit/:contactId" element={<EditContact />} />
            <Route path="/contacts/view/:contactId" element={<ViewContact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
