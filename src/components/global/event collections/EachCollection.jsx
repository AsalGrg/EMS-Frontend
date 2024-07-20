import { Avatar, Card, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router";

const EachCollection = ({ collection, accessedBy}) => {

  const navigate = useNavigate();
  
  return (
    <Card padding="lg" radius="md"
    className="cursor-pointer"
    onClick={()=>{
      accessedBy&& accessedBy==='admin'?navigate(`/admin/collectionDescription/${collection.id}`): navigate(`/user/collectionDescription/${collection.id}`)
    }}
    >
      <Card.Section
        className="bg-primary"
        style={{
          height: '270px'
        }}
      >
        {collection.coverImg instanceof File ? (
          <img
            src={URL.createObjectURL(collection.coverImg)}
            class=" h-100 w-100"
            style={{
              objectFit: "cover",
            }}
            alt="Responsive image h-100"
          />
        ) : (
          <img
            src={collection.coverImg}
            // src="https://www.ocregister.com/wp-content/uploads/2022/08/OCR-L-CULINARYKIDS-CAMP-05-LO.jpg?w=478"
            class=" h-100 w-100"
            style={{
              objectFit: "cover",
            }}
            alt="Responsive image"
          />
        )}
      </Card.Section>

      <Text fw={500} mt="md" size="lg">
        {collection.collectionName}
      </Text>

      <div className="mt-1 d-flex align-items-center">
        <Avatar
          component="a"
          href="https://github.com/rtivital"
          target="_blank"
          src="avatar.png"
          alt="it's me"
        />
        <p className="mt-3 ms-2">Prastuti</p>
      </div>

      <Text size="sm" fw={500} mt={"sm"} c={"#0A66C2"}>
        {collection.noOfUpcomingEvents} upcoming events
      </Text>

      <Text size="sm" mt="sm" fw={400} fs={"italic"} c="dimmed" lineClamp={3}>
        {collection.description}
      </Text>
    </Card>
  );
};

export default EachCollection;
