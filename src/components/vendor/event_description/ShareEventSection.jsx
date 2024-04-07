import { Text, rem } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCopy,
  IconCopyCheck,
} from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShareEventSection = () => {
  const icoStyle = {
    height: rem(23),
    width: rem(23),
  };

  const [isCopied, setisCopied] = useState(false);

  const copyLink = () => {
    setisCopied(true);
    console.log(document.getElementById("event-link").innerText);
    navigator.clipboard.writeText(
      document.getElementById("event-link").innerText
    );

    setTimeout(() => {
      setisCopied(false);
    }, 2000);
  };

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.eventDescription);

  const basicEventDetails = formData.eventBasicDetails;

  return (
    <div className="mt-5">
      <Text size="xl" fw={600}>
        Share
      </Text>

      <div className="mt-4">
        <Text size="md" fw={600}>
          Event link
        </Text>

        <div className="d-flex gap-4 align-items-center">
          <Text size="md" truncate="end" id="event-link">
            http://localhost:5175/event/about/{basicEventDetails.eventId}
          </Text>

          {!isCopied ? (
            <div className="iconHighlighter rounded" onClick={copyLink}>
              <IconCopy style={icoStyle} />
              <Text size="md" fw={600} truncate="end">
                Copy Link
              </Text>
            </div>
          ) : (
            <div className="iconHighlighter rounded" onClick={copyLink}>
              <IconCopyCheck style={icoStyle} />
              <Text size="md" fw={600} truncate="end">
                Copied
              </Text>
            </div>
          )}
        </div>
      </div>

      <Text size="md" fw={600} className="mt-3">
        Share on
      </Text>
      <div className="d-flex gap-3 mt-2">
        <div className="rounded text-primary border border-3 rounded-circle p-2">
          <IconBrandFacebook style={icoStyle} />
        </div>

        <div className="rounded text-primary border border-3 rounded-circle p-2">
          <IconBrandInstagram style={icoStyle} />
        </div>

        <div className="rounded text-primary border border-3 rounded-circle p-2">
          <IconBrandTwitter style={icoStyle} />
        </div>

        <div className="rounded text-primary border border-3 rounded-circle p-2">
          <IconBrandLinkedin style={icoStyle} />
        </div>
      </div>
    </div>
  );
};

export default ShareEventSection;
