import { Card, Image, Text } from "@mantine/core";
import React from "react";

const EachEvent = () => {
  return (
    <div className="col-lg-3 col-md-4 col-12">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={180}
            alt="Norway"
            className="img-fluid"
          />
        </Card.Section>

        <Text fw={500} mt="md">
          Norway Fjord Adventures
        </Text>

        <Text size="sm" fw={400} c="dimmed" mt="sm">
          Event Dates
        </Text>

        <Text size="sm" fw={400} c="red" mt="sm">
          From $0.00
        </Text>

        <Text size="sm" fw={400} mt="sm">
          Oragnizer name
        </Text>

        <Text size="sm" mt="sm" fw={400}>
          From $0.00
        </Text>
      </Card>
    </div>
  );
};

export default EachEvent;
