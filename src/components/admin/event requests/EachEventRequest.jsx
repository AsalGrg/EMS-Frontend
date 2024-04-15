import { Button, Text, rem } from "@mantine/core";
import { IconCheck, IconTrash } from "@tabler/icons-react";
import React from "react";
import formatDate from "../../utilities/formatDate";
import formatTime from "../../utilities/formatTime";
import { useNavigate } from "react-router";
import { change_event_request } from "../../../services/user details/admin/change_event_request";
import { useDispatch } from "react-redux";
import { acceptRequest, declineRequest } from "../../../pages/admin/event requests/EventRequestsSlice";
import { IconCircleX } from "@tabler/icons-react";

const EachEventRequest = ({ request }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleAcceptRequest(e) {
    e.stopPropagation();

    const res = await change_event_request(request.eventId, "accept");
    if (res.ok) {
      dispatch(acceptRequest(request.eventId));
    }
  }

  async function handleRejectRequest(e) {
    e.stopPropagation();

    const res = await change_event_request(request.eventId, "reject");
    if (res.ok) {
      dispatch(declineRequest(request.eventId));
    }
  }
  return (
    <tr
      className="eachEventRow border-bottom"
      onClick={() => navigate(`/event/about/${request.eventId}`)}
    >
      <td>
        <div className="d-flex gap-3">
          <div className="text-center">
            <Text c={"red"}>
              {formatDate(request.startDate).substring(0, 3)}
            </Text>
            <Text c={"dimmed"} size="lg" fw={500}>
              {formatDate(request.startDate).substring(4, 6)}
            </Text>
          </div>

          <div className="eachEventRow-img-div">
            <img
              src={request.eventCoverImgUrl}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="d-flex justify-content-center flex-column gap-1">
            <Text size="md">{request.eventName}</Text>
          </div>
        </div>
      </td>
      <td>{request.organizerName}</td>
      <td>
        {formatDate(request.startDate)} at {formatTime(request.startTime)}
      </td>
      <td>{request.locationType}</td>
      <td className="d-flex justify-content-center align-items-center mt-3">
        {request.eventStatus === "pending" ? (
          <div className="d-flex gap-2">
            <Button
              color="dark"
              variant={"outline"}
              size="xs"
              leftSection={
                <IconCheck
                  style={{ height: rem(18), width: rem(18) }}
                  color="green"
                />
              }
              onClick={handleAcceptRequest}
            >
              Accept
            </Button>
            <Button
              color="dark"
              variant={"outline"}
              size="xs"
              leftSection={
                <IconCircleX
                  style={{ height: rem(18), width: rem(18) }}
                  color="red"
                />
              }
              onClick={handleRejectRequest}
            >
              Reject
            </Button>
          </div>
        ) : request.eventStatus === "completed" ? (
          <Button
            // color="rgba(183, 237, 180, 1)"
            color="green"
            disabled
            variant={"outline"}
            size="xs"
            leftSection={
              <IconCheck
                style={{ height: rem(18), width: rem(18) }}
                color="green"
              />
            }
          >
            Accepted
          </Button>
        ) : (
          <Button
            color="dark"
            variant={"outline"}
            size="xs"
            disabled
            leftSection={
              <IconCircleX
                style={{ height: rem(18), width: rem(18) }}
                color="red"
              />
            }
          >
            Rejected
          </Button>
        )}
      </td>
    </tr>
  );
};

export default EachEventRequest;
