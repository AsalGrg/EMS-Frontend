import { Button, Modal, TextInput, Textarea, Tooltip } from "@mantine/core";
import React, { useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import add_collection from "../../../services/user details/admin/add_collection";
import { useDispatch } from "react-redux";
import { addCollection } from "../../../pages/admin/collection/CollectionSlice";

const AddCollectionModal = ({ opened, open, close }) => {
  const [collectionName, setcollectionName] = useState("");
  const [collectionDescription, setcollectionDescription] = useState("");
  const [collectionCoverImage, setcollectionCoverImage] = useState(null);

  const fileInputRef = useRef();
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setcollectionCoverImage(e.target.files[0]);
    console.log("hh");
  };

  const handleAddCollection = async () => {
    const collectionDetails = {
      collectionName: collectionName,
      description: collectionDescription,
    };
    const res = await add_collection(collectionDetails, collectionCoverImage);
    if(res.ok){ 
        dispatch(addCollection({
            collectionName: collectionName,
            description: collectionDescription,
            coverImg: collectionCoverImage,
            noOfUpcomingEvents: 0
        }))
        close();
    }
  };
  return (
    <Modal
      opened={opened}
      onClose={close}
      size={"60%"}
      title="Add Collection"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <div className="container-fluid d-flex flex-column gap-3 px-4 py-2">
        <div
          className="rounded rounded-1 mt-3 position-relative"
          style={{
            height: "350px",
          }}
        >
          {collectionCoverImage === null ? (
            <div
              className="h-100 rounded container d-flex"
              style={{
                backgroundImage: `url('https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102708416%2F232138391026%2F1%2Foriginal.20200604-182444?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=68a881f6f7a67d729dbf42e31c857b3a')`,
                backgroundSize: "cover",
              }}
              onClick={handleClick}
            >
              <div className="selectImageBtnDiv">
                <p>Upload Cover Image</p>
              </div>

              <input
                type="file"
                hidden
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </div>
          ) : (
            <>
              <img
                src={URL.createObjectURL(collectionCoverImage)}
                className="w-100 h-100 rounded "
                style={{
                  objectFit: "cover",
                }}
              ></img>

              <Tooltip label="Remove image">
                <Button
                  className="position-absolute top-0 start-100 translate-middle"
                  size="sm"
                  radius={"sm"}
                >
                  <IoIosCloseCircle
                    style={{
                      fontSize: "20px",
                    }}
                    onClick={() => setcollectionCoverImage(null)}
                  />
                </Button>
              </Tooltip>
            </>
          )}
        </div>

        <div className="d-flex flex-column gap-2">
          <TextInput
            required
            placeholder
            className="w-74"
            label="Collection name"
            value={collectionName}
            onChange={(e) => setcollectionName(e.target.value)}
            withAsterisk
          />
          <Textarea
            autosize
            minRows={3}
            size="sm"
            withAsterisk
            value={collectionDescription}
            onChange={(e) => setcollectionDescription(e.target.value)}
            label="Collection description"
          />
        </div>

        <div className="d-flex justify-content-end">
          <button
            className="dashboard-btn"
            type="submit"
            onClick={handleAddCollection}
          >
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddCollectionModal;
