import React, { useEffect } from "react";
import IntroSection from "../../components/user_profile/Intro_section/IntroSection";
import { Badge, Tabs, rem } from "@mantine/core";
import AboutTab from "../../components/user_profile/user_details/about_tab/AboutTab";
import UpcomingEventsTab from "../../components/user_profile/user_details/events_Tab/UpcomingEventsTab";
import PastEventsTab from "../../components/user_profile/user_details/events_Tab/PastEventsTab";
import {
  get_user_details,
  get_user_details_by_userId,
} from "../../services/user details/getUserDetails";
import { useLoaderData, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateEntireUserProfileState } from "./UserProfileSlice";


const UserProfile = () => {
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const data = useLoaderData();
  useEffect(() => {
    if (data != null) {
      dispatch(updateEntireUserProfileState(data));
    }
  }, []);

  return (
    <main className="w-100 fonts">
      <IntroSection />
      <div className="mt-5">
        <Tabs color="blue" radius="xs" defaultValue="gallery">
          <Tabs.List className="d-flex justify-content-center fw-bold">
            <Tabs.Tab value="gallery">Profile</Tabs.Tab>
            <Tabs.Tab value="messages">
              Upcoming <Badge size="sm">{userData.upcomingEvents.length}</Badge>
            </Tabs.Tab>
            <Tabs.Tab value="settings">
              Past <Badge size="sm">{userData.pastEvents.length}</Badge>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">
            <AboutTab />
          </Tabs.Panel>

          <Tabs.Panel value="messages">
            <UpcomingEventsTab />
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            <PastEventsTab />
          </Tabs.Panel>
        </Tabs>
      </div>
    </main>
  );
};

export async function userProfileLoader({ params }) {
  const { user } = params;

  let data;

  if (user === "me") {
    const res = await get_user_details();

    if (res.status == 200) {
      data = res.data;
    } else {
      throw new Error("Error fetching data");
    }
  } else {
    const res = await get_user_details_by_userId(user);
    if (res.ok) {
      data = await res.json();
    }
  }

  return data;
}
export default UserProfile;
