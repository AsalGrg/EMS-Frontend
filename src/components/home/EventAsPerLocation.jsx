import React, { useEffect, useState } from "react";
import PlaceSelector from "../utilities/placeSelector";
import { Text } from "@mantine/core";
import get_event_by_location from "../../services/user/get_event_by_location";
import EventCard from "../global/EventCard";
import EventSnippetsGridView from "./EventSnippetsGridView";
import EventSnippetsCourselView from "../global/EventSnippetsCourselView";
import NoEventsBanner from "../global/NoEventsBanner";
import VendorSnippets from "../global/VendorSnippets";

const EventAsPerLocation = () => {
  const [location, setlocation] = useState();
  const [events, setEvents] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const [vendors, setvendors] = useState([])

  useEffect(() => {
    async function getEventAsPerLocation() {
      console.log(location);
      const res = await get_event_by_location(location);
      if (res.ok) {
        const data = await res.json();
        setEvents(data.events);
        setvendors(data.vendors)
        console.log(data);
        setisLoading(false);
      }
    }
    getEventAsPerLocation();
  }, [location]);

  return (
    <section className="mt-5"
    >
      <div className="d-flex align-items-center gap-3">
        <Text size="xl" fw="bold">
          Browsing Events in
        </Text>
        <PlaceSelector setLocation={setlocation} />
      </div>

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
        <NoEventsBanner />
      )}

      {/* accessible only after the user is logged in */}
      {vendors.length!==0 && <VendorSnippets vendors={vendors} />}
    </section>
  );
};

export default EventAsPerLocation;
