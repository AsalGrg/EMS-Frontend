import {
  Button,
  Divider,
  Input,
  NumberInput,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { IconCoinRupee, IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utilities/formatDate";

const TicketModalContent = () => {
  const handlersRef = useRef(null);
  const formData = useSelector((state) => state.aboutEvent);
  const ticketDetails = formData.ticketDetails;
  const dispatch = useDispatch();

  const unselectedClass = "rounded border border-2 px-3"
  const selectedClass ="rounded border border-2 border-primary px-3"

  const iconStyle = {
    height: rem(15),
    width: rem(15),
  };


  const [ticketCartDetails, setTicketCartDetails] = useState(null);

  function handleAddDonationTicketDetails(donationQuantity) {
    if (donationQuantity !== 0) {
      const ticketDetailsData = {
        ticketType: "Donation",
        total: donationQuantity,
      };
      setTicketCartDetails(ticketDetailsData)
    }else{
        setTicketCartDetails(null)
    }
  }

  function handleOtherTicketDetails(ticketQuantity) {
    if (ticketQuantity !== 0) {
      const ticketDetailsData = {
        ticketType: ticketDetails.ticketType,
        ticketQuantity: ticketQuantity,
        total: ticketQuantity * ticketDetails.ticketPrice,
      };
      setTicketCartDetails(ticketDetailsData)
    }else{
        setTicketCartDetails(null)
    }
  }

  return (
    <div className="row">
      <div className="col-8 px-5">
        <div className={ticketCartDetails? selectedClass: unselectedClass}>
          <div className="d-flex justify-content-between align-items-center py-4">
            <Title order={5}>{ticketDetails.ticketType}</Title>
            {ticketDetails.ticketType === "Donation" ? (
              <NumberInput
                size={"sm"}
                leftSection={<IconCoinRupee size={16} />}
                onChange={(donationQuantity)=>handleAddDonationTicketDetails(donationQuantity)}
              />
            ) : (
              <div className="d-flex gap-5 align-items-center">
                <div>
                  <Text fw={600} size="sm">
                    Rs {ticketDetails.ticketPrice}
                  </Text>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <Button
                    variant="light"
                    color="gray"
                    onClick={() => handlersRef.current?.decrement()}
                  >
                    <IconMinus style={iconStyle} />
                  </Button>
                  <NumberInput
                    placeholder="Click the buttons"
                    style={{
                      width: "100px",
                    }}
                    handlersRef={handlersRef}
                    step={1}
                    min={0}
                    max={ticketDetails.ticketAvailableQuantity}
                    defaultValue={0}
                    onChange={(value)=>handleOtherTicketDetails(value)}
                  />

                  <Button
                    variant="light"
                    color="gray"
                    onClick={() => handlersRef.current?.increment()}
                  >
                    <IconPlus style={iconStyle} />
                  </Button>
                </div>
              </div>
            )}
            {/* if them ticket is other than donation */}
          </div>

          <Divider className="" />

          <Text className="mt-3 mb-3">
            Sales end on {formatDate(formData.eventStartDate)} - Fees and taxes
            will be calculated before you place your order.
          </Text>
        </div>
      </div>

      <div className="col-4">
        <div
          className="w-100 bg-primary"
          style={{
            height: "150px",
          }}
        >
          <img
            src={formData.coverImage}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
            }}
          ></img>
        </div>

        <div
          style={{
            minHeight: "400px",
            backgroundColor: "#F8F7FA",
          }}

          className="px-3 py-3"
        >
          {ticketCartDetails && (
            <div className="d-flex flex-column gap-3 justify-content-center">
              <Text size="md" fw={600}>
                Order Details
              </Text>

              {ticketCartDetails.ticketType === "Donation" ? (
                <Text>{ticketCartDetails.ticketType}</Text>
              ) : (
                <div className="d-flex justify-content-between">
                  <Text>{ticketCartDetails.ticketType}</Text>
                  <Text size="xs">X {ticketCartDetails.ticketQuantity}</Text>
                </div>
              )}

              <Divider />
              <div className="d-flex justify-content-between">
                <Title order={4}>Total</Title>
                <Title order={4}>Rs. {ticketCartDetails.total}</Title>
              </div>

              <Button
              color="rgba(300, 118, 0, 1)"
              className="mt-3"
              >Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketModalContent;
