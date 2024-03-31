import { Badge, Text } from "@mantine/core";
import React from "react";

const EachResult = ({ eachResult }) => {
  return (
    <div
      className="row justify-content-start py-3 mb-3 hoverShadow w-100"
      style={{
        minHeight: "170px",
        maxHeight: "1000px",
        borderRadius: "15px",
      }}
    >
      <div className="col-md-5 col-12 rounded mb-2 d-flex align-items-center justify-content-center">
        <img
          src={eachResult.eventCoverImgUrl}
          className="img-fluid rounded w-100 d-block d-md-none"
          alt=""
        />

        <img
          src={eachResult.eventCoverImgUrl}
          className="img-fluid rounded d-none w-100 d-md-block"

          style={{
            height: "150px",
            objectFit: "cover"
          }}
          alt=""
        />
      </div>
      <div className="col-md-7 col-12">
        {/* for badges */}
        <div className="d-flex flex-wrap mb-1 gap-2">
          <Badge variant="light" color="violet" className="me-2 p-3" size="sm">
            Sales End Soon
          </Badge>
          <Badge variant="light" color="yellow" className="me-2 p-3" size="sm">
            Almost Full
          </Badge>
        </div>

        <Text size="md" fw={600}>
          {eachResult.eventName}
        </Text>

        <Text size="sm" fw={500} c={"grey"}>
          {eachResult.startDate}
        </Text>

        <Text size="sm" fw={500} c={"grey"} className="mt-1">
          {eachResult.location_display_name}
        </Text>

        {eachResult.ticketType === "paid" ? (
          <Text size="sm" fw={500} className="mt-1">
            Rs {eachResult.ticketPrice}
          </Text>
        ) : (
          <Text size="sm" fw={500} className="mt-1">
            {eachResult.ticketType}
          </Text>
        )}
      </div>
    </div>
  );
};

export default EachResult;
