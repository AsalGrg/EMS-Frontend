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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import AboutEvent, { aboutEventLoader } from "./pages/about_event/AboutEvent";
import RootLayout from "./layout/RootLayout";
import SearchResult, {
  searchResultLoader,
} from "./pages/search result/SearchResult";
import UserProfile from "./pages/user_profile/UserProfile";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

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
          <Route
            exact
            path="event/:pageAccessType"
            element={<AboutEvent />}
            loader={aboutEventLoader}
          />
        </Route>

        {/* for the users */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route exact path="category/:catName" element={<Category />} />
          <Route
            exact
            path="event/:pageAccessType/:id"
            element={<AboutEvent />}
            loader={aboutEventLoader}
          />
          <Route
            exact
            path="search/:eventName/:location"
            element={<SearchResult />}
            loader={searchResultLoader}
          />
          <Route exact path="user" element={<UserProfile />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
