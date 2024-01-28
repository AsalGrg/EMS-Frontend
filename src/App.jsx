import React from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
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
import "bootstrap/dist/js/bootstrap.js";
import AboutEvent from "./pages/about_event/AboutEvent";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* for login */}
        <Route>
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="verify-email" element={<EmailVerification />} />
          <Route exact path="search" element={<SearchBar />} />
          <Route exact path="create-event" element={<CreateEvent />} />
        </Route>

        {/* for the users */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route exact path="category/:catName" element={<Category />} />
          <Route exact path="about-event" element={<AboutEvent />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  );
};

export default App;
