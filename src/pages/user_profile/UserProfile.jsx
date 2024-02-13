import React from "react";
import IntroSection from "../../components/user_profile/Intro_section/IntroSection";
import { Tabs, rem } from "@mantine/core";
import AboutTab from "../../components/user_profile/user_details/about_tab/AboutTab";
import UpcomingEventsTab from "../../components/user_profile/user_details/events_Tab/UpcomingEventsTab";
import PastEventsTab from "../../components/user_profile/user_details/events_Tab/PastEventsTab";
const UserProfile = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <main className="">
      <IntroSection />

      <div className="mt-5">
        <Tabs color="blue" radius="xs" defaultValue="gallery">
          <Tabs.List className="d-flex justify-content-center fw-bold">
            <Tabs.Tab value="gallery">Profile</Tabs.Tab>
            <Tabs.Tab value="messages">Upcoming</Tabs.Tab>
            <Tabs.Tab value="settings">Past</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">
            <AboutTab/>
          </Tabs.Panel>

          <Tabs.Panel value="messages">
            <UpcomingEventsTab/>
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            <PastEventsTab/>
          </Tabs.Panel>
        </Tabs>
      </div>
    </main>
  );
};

export default UserProfile;
