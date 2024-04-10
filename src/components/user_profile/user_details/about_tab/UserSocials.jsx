import { Badge, Text, rem } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconGlobe,
  IconWorld,
} from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

const UserSocials = () => {
  const iconStyle = { width: rem(25), height: rem(25) };

  const badgeStyle = {
    textTransform: "none",
    height: "50px",
    fontWeight: "bold",
    textAlign: "start",
  };

  const userData = useSelector((state) => state.userProfile);
  const userDetailsSnippets = userData.userSnippetDetails;

  return (
    <section className="col-3 border border-2 rounded px-3 py-3">
      <Text size="xl" fw={700}>
        Socials
      </Text>

      <div className="d-flex flex-column py-3 gap-2">
        {userDetailsSnippets.facebookLink != null && (
          <Badge
            variant="outline"
            color="#4267B2"
            radius="md"
            style={badgeStyle}
            size="xl"
            fullWidth
            leftSection={<IconBrandFacebook style={iconStyle} />}
            onClick={() =>
              window.open(userDetailsSnippets.facebookLink, "_blank")
            }
          >
            Facebook
          </Badge>
        )}

        {userDetailsSnippets.instagramLink != null && (
          <Badge
            variant="outline"
            color="#833AB4"
            radius="md"
            style={badgeStyle}
            size="xl"
            fullWidth
            leftSection={<IconBrandInstagram style={iconStyle} />}
            onClick={() =>
              window.open(userDetailsSnippets.instagramLink, "_blank")
            }
          >
            Instagram
          </Badge>
        )}

        {userDetailsSnippets.twitterLink != null && (
          <Badge
            variant="outline"
            color="#1DA1F2"
            radius="md"
            style={badgeStyle}
            size="xl"
            fullWidth
            leftSection={<IconBrandTwitter style={iconStyle} />}
            onClick={() =>
              window.open('https://www.facebook.com/asal.goorong/', "_blank")
            }
          >
            Twitter
          </Badge>
        )}

        {userDetailsSnippets.linkedInLink != null && (
          <Badge
            variant="outline"
            color="#0A66C2"
            radius="md"
            style={badgeStyle}
            size="xl"
            fullWidth
            leftSection={<IconBrandLinkedin style={iconStyle} />}
            onClick={() =>
              window.open(userDetailsSnippets.linkedInLink, "_blank")
            }
          >
            LinkedIn
          </Badge>
        )}
      </div>
    </section>
  );
};

export default UserSocials;
