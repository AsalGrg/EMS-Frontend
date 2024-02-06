import { Checkbox, Text } from "@mantine/core";
import React from "react";

const CategoryFilter = () => {
  
  return (
    <div className="mt-5">
      <Text size="sm" fw={600}>
        Category
      </Text>

      <div className="d-grid gap-3 mt-2">
        <Checkbox label="Food & Drinks" 
        />
        <Checkbox defaultChecked label="Free" />
        <Checkbox defaultChecked label="Donation" />
      </div>
    </div>
  );
};

export default CategoryFilter;
