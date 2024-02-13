import { Avatar } from "@mantine/core";
import React from "react";

const UserImages = () => {
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
        src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/316669820_1486705245141001_8411721115992888449_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4z1bURYvngwAX-xdn65&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBTrV0BEAG8wEyfwwQN_maUgyC6lOhI5OcCk4kgZ9ylEg&oe=65CFFABC"
        alt="Vitaly Rtishchev"
        color="red"
        size={"xl"}
        className="position-absolute top-100 start-50 translate-middle"
      />
    </div>
  );
};

export default UserImages;
