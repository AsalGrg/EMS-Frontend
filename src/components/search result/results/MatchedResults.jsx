import { Badge, Text } from "@mantine/core";
import React from "react";

const MatchedResults = () => {
  return (
    <div className="bg-primary">
      <div
        className="row justify-content-start rounded px-2 py-3 "
        style={{
          minHeight: "180px",
          maxHeight: "250px",
        }}
      >
        <div className="col-5 rounded mb-2 d-flex align-items-center">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F674985949%2F1616120905893%2F1%2Foriginal.20240115-192228?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=67eff135bf075e12dea191295a20abf6"
            className="img-fluid rounded"
            alt=""
          />
        </div>
        <div className="col-6">
          {/* for badges */}
          <div className="d-flex flex-wrap mb-1 gap-2">
            <Badge variant="light" color="violet" className="me-2 p-3" size="sm">
              Sales End Soon
            </Badge>
            <Badge variant="light" color="yellow" className="me-2 p-3" size="sm">
              Almost Full
            </Badge>
          </div>

          <Text size="lg" fw={600}>Web Development Seminar jssdjw hdhedh</Text>

          <Text size="sm" fw={500} c={"grey"}>Fri Sep 3, 2005</Text>

          <Text size="sm" fw={500} c={"grey"} className="mt-2">Pokhara</Text>

          <Text size="sm" fw={500} className="mt-2">Free</Text>
        </div>
      </div>

      <div
        className="row justify-content-start rounded px-2 py-3 "
        style={{
          minHeight: "180px",
          maxHeight: "250px",
        }}
      >
        <div className="col-5 rounded mb-2 d-flex align-items-center">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F674985949%2F1616120905893%2F1%2Foriginal.20240115-192228?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=67eff135bf075e12dea191295a20abf6"
            className="img-fluid rounded"
            alt=""
          />
        </div>
        <div className="col-6">
          {/* for badges */}
          <div className="d-flex flex-wrap mb-1 gap-2">
            <Badge variant="light" color="violet" className="me-2 p-3" size="sm">
              Sales End Soon
            </Badge>
            <Badge variant="light" color="yellow" className="me-2 p-3" size="sm">
              Almost Full
            </Badge>
          </div>

          <Text size="lg" fw={600}>Web Development Seminar jssdjw hdhedh</Text>

          <Text size="sm" fw={500} c={"grey"}>Fri Sep 3, 2005</Text>

          <Text size="sm" fw={500} c={"grey"} className="mt-2">Pokhara</Text>

          <Text size="sm" fw={500} className="mt-2">Free</Text>
        </div>
      </div>
    </div>
  );
};

export default MatchedResults;
