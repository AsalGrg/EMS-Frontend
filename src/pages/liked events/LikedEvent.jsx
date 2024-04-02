import { Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import NoEventsBanner from "../../components/global/NoEventsBanner";
import EventSnippetsCourselView from "../../components/global/EventSnippetsCourselView";
import EventSnippetsGridView from "../../components/home/EventSnippetsGridView";
import get_user_liked_events from "../../services/user/get_user_liked_events";
import NoOrders from "../../components/global/NoOrders";

const LikedEvent = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setisLoading] = useState(true);
  
    useEffect(() => {
      async function getLikedEvents() {
        const res = await get_user_liked_events();
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
          console.log(data);
          setisLoading(false);
        }
      }
      getLikedEvents();
    }, []);


  return (
    <main>
      <Title>Liked</Title>

      <div className="mt-4">

          {isLoading ? (
            <p>Loading</p>
          ) : events.length > 0 ? (
            <>
              {/* grid view */}
              <div className="d-none d-lg-block">
                <EventSnippetsGridView events={events} />
              </div>

              {/* coursel view */}

              <div className="d-block d-lg-none">
                <EventSnippetsCourselView events={events} />
              </div>
            </>
          ) : (
            <NoOrders message={"No liked events."}/>
          )}
      </div>
    </main>
  );
};

export default LikedEvent;
