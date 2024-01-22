import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";
import SearchBar from "./pages/search/SearchBar";
import Category from "./pages/category/Category";
import EmailVerification from "./pages/email_verification/EmailVerification";
import CreateEvent from "./pages/create event/CreateEvent";
import { Provider } from "react-redux";
import { store } from "./app/store";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return (
    <>
      {/* <Home/>

    <Login/>

    <Register/>


    <CategoryWrapper/>

    <SearchBarWrapper/> */}

      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/search" element={<SearchBar />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/verify-email" element={<EmailVerification />} />
          <Route exact path="/create-event" element={<CreateEvent />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
