import { Avatar } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";

const UserImages = () => {

  const userData = useSelector((state) => state.userProfile);


  return (
    <div
      className="w-100 position-relative img-fluid coverImageDisplayDiv rounded d-flex justify-content-center"
      style={{
        maxHeight: "220px",
      }}
    >
      <img
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F660059509%2F1091247945163%2F1%2Foriginal.png?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=669bb907c9f4fb4227a01d9ae927b8a8"
        className="img-fluid w-100"
        style={{
          objectFit: "cover",
        }}
      ></img>
      <Avatar
        src={userData.userSnippetDetails.userDp}
        alt= {userData.userSnippetDetails.username}
        color="red"
        size={"xl"}
        className="position-absolute top-100 start-50 translate-middle"
      />
    </div>
  );
};

export default UserImages;
