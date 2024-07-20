import { Avatar, Text, Title } from "@mantine/core";
import React, { useEffect } from "react";
import EventCard from "../../../components/global/EventCard";
import get_collection_description from "../../../services/user/get_collection_description";
import { useLoaderData, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeEventFromCollection, updateEntireCollectionDescriptionState } from "./CollectionDescriptionSlice";
import NoEventsBanner from "../../../components/global/NoEventsBanner";
import EventSnippetsCourselView from "../../../components/global/EventSnippetsCourselView";
import EventSnippetsGridView from "../../../components/home/EventSnippetsGridView";
import remove_event_from_collection from "../../../services/user/remove_event_from_collection";

const CollectionDescription = () => {
  const fetchedData = useLoaderData();

  const {accessedBy}= useParams();

  const forCollection= accessedBy&& accessedBy==='admin'? true: false;

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.collectionDescription);

  useEffect(() => {
    if (fetchedData !== null) {
      dispatch(updateEntireCollectionDescriptionState(fetchedData));
    }
  }, []);

  async function handleRemoveEventFromCollection(eventId){
    console.log(eventId)
    const res= await remove_event_from_collection(eventId, formData.collectionId)

    if(res.ok){
      dispatch(removeEventFromCollection({eventId: eventId}))
    }
  }

  return (
    <section className="px-5 py-3">
      <div
        className="row align-items-center"
        style={{
          minHeight: "300px",
          maxHeight: "300px",
        }}
      >
        <div className="col-6 p-4 h-100">
          <Title>{formData.collectionName}</Title>

          <div className="d-flex mt-4 align-items-center gap-3">
            <Avatar size={"lg"}></Avatar>
            <Text>Collection by Prastuti</Text>
          </div>

          <Text className="mt-4" fs={'italic'} c={'dimmed'}>{formData.collectionDescription}</Text>
        </div>

        <div className="col-6  h-100 d-flex justify-content-end">
          <img
            src={formData.collectionImage}
            alt=" "
            className="w-75"
            style={{
              objectFit: "cover",
              maxHeight: "350px",
            }}
          />
        </div>
      </div>

      <div className="row gy-4 mt-4">
        {formData.collectionEvents.length > 0 ? (
          <>
            {/* grid view */}
            <div className="d-none d-lg-block">
              <EventSnippetsGridView events={formData.collectionEvents}  forCollection={forCollection} handleRemoveEventFromCollection={handleRemoveEventFromCollection}/>
            </div>

            {/* coursel view */}

            <div className="d-block d-lg-none">
              <EventSnippetsCourselView events={formData.collectionEvents} />
            </div>
          </>
        ) : (
          <NoEventsBanner />
        )}
      </div>
    </section>
  );
};

export default CollectionDescription;

export async function collectionDescriptionLoader({ params }) {
  const { collectionId } = params;

  const res = await get_collection_description(collectionId);

  if (res.ok) {
    const data = await res.json();

    console.log("LOADEEEE");

    return data;
  }

  return null;
}
