import { Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";

const EventCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={180}
          alt="Norway"
          className="img-fluid"
        />
      </Card.Section>

      <Text fw={600} mt="md" size="lg">
        Norway Fjord Adventures
      </Text>

      <Text size="md" fw={500} c="dimmed" mt="sm">
        Event Dates
      </Text>

      <Text size="md" fw={500} c="red" mt="sm">
        From $0.00
      </Text>

      <Text size="md" fw={500} mt="sm">
        Oragnizer name
      </Text>

      <Text size="md" mt="sm" fw={500} right={<IconUser />}>
        From $0.00
      </Text>
    </Card>
  );
};

export default EventCard;
