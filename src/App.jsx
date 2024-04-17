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
import CreateEvent, {
  createEventLoader,
} from "./pages/create event/CreateEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import AboutEvent, { aboutEventLoader } from "./pages/about_event/AboutEvent";
import RootLayout from "./layout/RootLayout";
import SearchResult, {
  searchResultLoader,
} from "./pages/search result/SearchResult";
import UserProfile, {
  userProfileLoader,
} from "./pages/user_profile/UserProfile";
import AdminHome from "./pages/admin/home/AdminHome";
import { useDispatch } from "react-redux";
import AdminLayout from "./layout/AdminLayout";
import VendorLayout from "./layout/VendorLayout";
import VendorHome from "./pages/vendor/home/VendorHome";
import VendorEvents, {
  vendorEventsLoader,
} from "./pages/vendor/events/VendorEvents";
import VendorLayoutAlt from "./layout/VendorLayoutAlt";
import EventDescription, {
  eventDescriptionLoader,
} from "./pages/vendor/event_description/EventDescription";
import VendorOrder from "./pages/vendor/orders/VendorOrder";
import UserPersonalPagesLayout from "./layout/UserPersonalPagesLayout";
import LikedEvent from "./pages/liked events/LikedEvent";
import Following from "./pages/following/Following";
import EmptyLayout from "./layout/EmptyLayout";
import AccessPassword from "./pages/access password/AccessPassword";
import Collection, {
  collectionLoader,
} from "./pages/admin/collection/Collection";
import EditProfile from "./pages/edit profile/EditProfile";
import EventRequests, { eventRequestsLoader } from "./pages/admin/event requests/EventRequests";
import SendEmail from "./pages/forgot password/send email/SendEmail";
import EnterPassword from "./pages/forgot password/Enter password/EnterPassword";

const App = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* for login */}
        <Route>
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path=":purpose/verify-email" element={<EmailVerification />} />
          <Route exact path="forgotPassword" element={<SendEmail />} />
          <Route exact path="forgotPassword/changePassword" element={<EnterPassword />} />
          <Route exact path="search" element={<SearchBar />} />
          <Route
            exact
            path="/c/:creationType/:eventId"
            element={<CreateEvent />}
            loader={createEventLoader}
          />
          <Route
            exact
            path="event/:pageAccessType"
            element={<AboutEvent />}
            loader={aboutEventLoader}
          />
        </Route>

        <Route element={<EmptyLayout />}>
          <Route exact path="accessPassword" element={<AccessPassword />} />
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
          <Route
            exact
            path="user/profile/:user"
            element={<UserProfile />}
            loader={userProfileLoader}
          />

          <Route
            exact
            path="events/collection/:collectionId"
            element={<UserProfile />}
            loader={userProfileLoader}
          />

          <Route exact path="editProfile" element={<EditProfile />} />
        </Route>

        <Route element={<UserPersonalPagesLayout />}>
          <Route exact path="liked/events" element={<LikedEvent />} />
          <Route exact path="following" element={<Following />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />} path="admin">
          <Route exact path="home" element={<AdminHome />} />
          <Route
            exact
            path="collections"
            element={<Collection />}
            loader={collectionLoader}
          />

          <Route
            exact
            path="eventRequests"
            element={<EventRequests />}
            loader={eventRequestsLoader}
          />
        </Route>

        {/* vendor routes */}

        <Route element={<VendorLayout />} path="vendor">
          <Route exact path="home" element={<VendorHome />} />
        </Route>

        <Route element={<VendorLayoutAlt />} path="vendor">
          <Route
            exact
            path="events"
            element={<VendorEvents />}
            loader={vendorEventsLoader}
          />
          <Route
            exact
            path="myEvent/:eventId"
            element={<EventDescription />}
            loader={eventDescriptionLoader}
          />
          <Route exact path="orders" element={<VendorOrder />} />
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
