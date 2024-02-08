import { Badge, Text } from "@mantine/core";
import React from "react";

const EachResult = () => {
  return (
    <div
      className="row justify-content-start ps-3 mb-3 hoverShadow w-100"
      style={{
        minHeight: "170px",
        maxHeight: "1000px",
        borderRadius: "15px",
      }}
    >
      <div className="col-md-5 col-12 rounded mb-2 d-flex align-items-center justify-content-center">
        <img
          src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F674985949%2F1616120905893%2F1%2Foriginal.20240115-192228?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=67eff135bf075e12dea191295a20abf6"
          className="img-fluid rounded w-100"
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
          Web Development Seminar jssdjw hdh
        </Text>

        <Text size="sm" fw={500} c={"grey"}>
          Fri Sep 3, 2005
        </Text>

        <Text size="sm" fw={500} c={"grey"} className="mt-1">
          Pokhara
        </Text>

        <Text size="sm" fw={500} className="mt-1">
          Free
        </Text>
      </div>
    </div>
  );
};

export default EachResult;
