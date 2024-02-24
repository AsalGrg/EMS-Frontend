import { Badge, Text } from "@mantine/core";
import React, { useEffect } from "react";
import EachResult from "./EachResult";
import NotMatchedDiaglog from "./NotMatchedDiaglog";
import { useSelector } from "react-redux";

const MatchedResults = () => {
  const formData = useSelector((state) => state.searchEvent);

  return (
    <div className="ps-5 ps-md-0">
      {formData.filteredData.length > 0 ? formData.filteredData.map(eachResult=>(
        <EachResult eachResult={eachResult}/>
        // <p>iuwie</p>
      )): (
        <NotMatchedDiaglog />
      )}
    </div>
  );
};

export default MatchedResults;
