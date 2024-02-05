import { Badge, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";

const SelectedFilters = () => {
  return (
    <section className="d-flex gap-3 flex-wrap mb-3">
      <Text size="sm" fw={400}>
        1 filter applied
      </Text>

      <Badge
        variant="light"
        color="gray"
        size="lg"
        tex
        rightSection={
          <IconX
            size={18}
            onClick={() => {
              console.log("Hello");
            }}
          />
        }
      >
        Badge
      </Badge>
      <Badge
        variant="light"
        color="gray"
        size="lg"
        tex
        rightSection={
          <IconX
            size={18}
            onClick={() => {
              console.log("Hello");
            }}
          />
        }
      >
        Badge
      </Badge>
      <Badge
        variant="light"
        color="gray"
        size="lg"
        tex
        rightSection={
          <IconX
            size={18}
            onClick={() => {
              console.log("Hello");
            }}
          />
        }
      >
        Badge
      </Badge>
      <Badge
        variant="light"
        color="gray"
        size="lg"
        tex
        rightSection={
          <IconX
            size={18}
            onClick={() => {
              console.log("Hello");
            }}
          />
        }
      >
        Badge
      </Badge>

      <Badge
        variant="light"
        color="gray"
        size="lg"
        tex
        rightSection={
          <IconX
            size={18}
            onClick={() => {
              console.log("Hello");
            }}
          />
        }
      >
        Badge
      </Badge>
    </section>
  );
};

export default SelectedFilters;
