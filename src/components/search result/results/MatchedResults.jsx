import { Badge, Text } from "@mantine/core";
import React from "react";
import EachResult from "./EachResult";
import NotMatchedDiaglog from "./NotMatchedDiaglog";

const MatchedResults = () => {
  return (
    <div>
     <EachResult/>
     <EachResult/>

     <NotMatchedDiaglog/>
    </div>
  );
};

export default MatchedResults;
