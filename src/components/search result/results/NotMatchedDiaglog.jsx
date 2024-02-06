import { Text } from "@mantine/core";
import React from "react";

const NotMatchedDiaglog = () => {
  return (
    <section className="row justify-content-between ps-2 align-items-center">
      <Text size="27px" fw={700} className="col-9" >
        Nothing matched your search, but you might like these options.
      </Text>

      <img src="/public/no-results.png" className="col-2 img-fluid"/>
    </section>
  );
};

export default NotMatchedDiaglog;
