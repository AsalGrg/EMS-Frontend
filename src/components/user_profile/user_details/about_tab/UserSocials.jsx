import { Badge, Text, rem } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconGlobe, IconWorld } from "@tabler/icons-react";
import React from "react";

const UserSocials = () => {
  const iconStyle = { width: rem(25), height: rem(25) };

  const badgeStyle = {
    textTransform: "none",
    height: "50px",
    fontWeight: "bold",
    textAlign: "start",
  };

  return (
    <section className="col-3 border border-2 rounded px-3 py-3">
      <Text size="xl" fw={700}>
        Socials
      </Text>

      <div className="d-flex flex-column py-3 gap-2">
        <Badge
          variant="outline"
          color="black"
          radius="md"
          style={badgeStyle}
          size="xl"
          fullWidth
          leftSection={<IconWorld style={iconStyle} />}
        >
          Website
        </Badge>

        <Badge
          variant="outline"
          color="#4267B2"
          radius="md"
          style={badgeStyle}
          size="xl"
          fullWidth
          leftSection={<IconBrandFacebook style={iconStyle} />}
        >
          Facebook
        </Badge>
        <Badge
          variant="outline"
          color="#833AB4"
          radius="md"
          style={badgeStyle}
          size="xl"
          fullWidth
          leftSection={<IconBrandInstagram style={iconStyle} />}
        >
          Instagram
        </Badge>

        <Badge
          variant="outline"
          color="#1DA1F2"
          radius="md"
          style={badgeStyle}
          size="xl"
          fullWidth
          leftSection={<IconBrandTwitter style={iconStyle} />}
        >
          Twitter
        </Badge>
        <Badge
          variant="outline"
          color="#0A66C2"
          radius="md"
          style={badgeStyle}
          size="xl"
          fullWidth
          leftSection={<IconBrandLinkedin style={iconStyle} />}
        >
          LinkedIn
        </Badge>
      </div>
    </section>
  );
};

export default UserSocials;
