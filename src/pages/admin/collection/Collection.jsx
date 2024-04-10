import React, { useEffect } from "react";
import EachCollection from "../../../components/global/event collections/EachCollection";
import EventCollection from "../../../components/global/event collections/EventCollection";
import { useDisclosure } from "@mantine/hooks";
import AddCollectionModal from "../../../components/admin/collections/AddCollectionModal";
import { useDispatch, useSelector } from "react-redux";
import get_all_collections from "../../../services/user/get_all_collections";
import { useLoaderData } from "react-router";
import { updateEntireCollectionsState } from "./CollectionSlice";

const Collection = () => {
  document.title = "Collections-Admin";

  const collectionState = useSelector((state) => state.collection);
  const dispatch = useDispatch();
  console.log(collectionState);
  const [opened, { open, close }] = useDisclosure(false);

  const fetchedData = useLoaderData();

  useEffect(() => {
    if (fetchedData !== null) {
      dispatch(updateEntireCollectionsState(fetchedData));
    }
  }, []);

  return (
    <section className="fonts p-5">
      <AddCollectionModal open={open} close={close} opened={opened} />
      <div className="d-flex justify-content-between flex-wrap">
        <h1 className="display-6 fw-bold">Events Collections</h1>
        <button className="dashboard-btn" onClick={open}>
          Add Collection
        </button>
      </div>

      <div className="row justity-content-evenly mt-4 gy-3">
        {collectionState.collections.map((each) => (
          <div className="col-lg-4 col-md-6 col-12">
            <EachCollection collection={each} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;

export async function collectionLoader() {
  let res = null;

  res = await get_all_collections();
  if (res.ok) {
    console.log("LOADEDD");
    const data = await res.json();

    console.log(data);
    return data;
  }
  return res;
}
