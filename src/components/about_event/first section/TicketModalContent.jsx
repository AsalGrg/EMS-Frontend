import {
  Button,
  Divider,
  Input,
  NumberInput,
  Switch,
  Text,
  Title,
  rem,
} from "@mantine/core";
import {
  IconCircleX,
  IconCoinRupee,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utilities/formatDate";
import UsePromoCode from "./UsePromoCode";
import { MdCancel } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const TicketModalContent = ({makePayment}) => {
  const handlersRef = useRef(null);
  const formData = useSelector((state) => state.aboutEvent);
  const ticketDetails = formData.ticketDetails;

  const unselectedClass = "rounded border border-2 px-3";
  const selectedClass = "rounded border border-2 border-primary px-3";

  const iconStyle = {
    height: rem(15),
    width: rem(15),
  };

  const [ticketCartDetails, setTicketCartDetails] = useState(null);
  const [promoCodeResponse, setpromoCodeResponse] = useState(null);
  const [promoCodeResponseDiv, setpromoCodeResponseDiv] = useState(false);
  function handleAddDonationTicketDetails(donationQuantity) {
    if (donationQuantity !== 0) {
      const ticketDetailsData = {
        ticketType: "Donation",
        total: donationQuantity,
      };
      setTicketCartDetails(ticketDetailsData);
    } else {
      setpromoCodeResponse(null);
      setTicketCartDetails(null);
    }
  }

  function handleOtherTicketDetails(ticketQuantity) {
    if (ticketQuantity !== 0) {
      const ticketDetailsData = {
        ticketType: ticketDetails.ticketType,
        ticketQuantity: ticketQuantity,
        total: ticketQuantity * ticketDetails.ticketPrice,
      };
      setTicketCartDetails(ticketDetailsData);
    } else {
      setpromoCodeResponse(null);
      setTicketCartDetails(null);
    }
  }

  useEffect(() => {
    function stateChangesOnPromoCodeResponse() {
      if (promoCodeResponse !== null) {
        const ticketDetailsData = {
          ticketType: ticketCartDetails.ticketType,
          totalBeforePromo: promoCodeResponse.netTotal,
          total: promoCodeResponse.grandTotal,
          ticketQuantity: ticketCartDetails.ticketQuantity,
          discountAmount: promoCodeResponse.discountAmount,
        };
        setTicketCartDetails(ticketDetailsData);
      }
    }
    stateChangesOnPromoCodeResponse();
  }, [promoCodeResponse]);

  function handleCancelPromoCode() {
    const ticketDetailsData = {
      ticketType: ticketCartDetails.ticketType,
      total: ticketCartDetails.totalBeforePromo,
      ticketQuantity: ticketCartDetails.ticketQuantity,
    };
    console.log(ticketCartDetails.totalBeforePromo);
    setpromoCodeResponse(null);
    setTicketCartDetails(ticketDetailsData);
  }

  let paymentDetails={
    event_id: formData.eventId,
    total_amount: ticketCartDetails ? ticketCartDetails.total: null,
    quantity:  ticketCartDetails ? ticketCartDetails.ticketQuantity: null,
    promoCode: promoCodeResponse? promoCodeResponse.promoCode: null
  }
  return (
    <div className="row">
      <div className="col-8 px-5">
        <div className={ticketCartDetails ? selectedClass : unselectedClass}>
          <div className="d-flex justify-content-between align-items-center py-4">
            <Title order={5}>{ticketDetails.ticketType}</Title>
            {ticketDetails.ticketType === "Donation" ? (
              <NumberInput
                size={"sm"}
                leftSection={<IconCoinRupee size={16} />}
                onChange={(donationQuantity) =>
                  handleAddDonationTicketDetails(donationQuantity)
                }
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
                    onChange={(value) => handleOtherTicketDetails(value)}
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

              {ticketCartDetails.totalBeforePromo && (
                <div className="d-flex justify-content-between fw-bolder">
                  <Text>Net total</Text>
                  <Text>Rs. {ticketCartDetails.totalBeforePromo}</Text>
                </div>
              )}

              {ticketCartDetails.discountAmount && (
                <div className="d-flex justify-content-between text-danger">
                  <Text>Discount</Text>
                  <Text>{promoCodeResponse.discountType}</Text>
                </div>
              )}

              <div className="d-flex justify-content-between">
                <Title order={4}>Total</Title>
                <Title order={4}>Rs. {ticketCartDetails.total}</Title>
              </div>

              {ticketDetails.hasPromoCode && promoCodeResponse === null && (
                <UsePromoCode
                  setPromoCodeResponse={setpromoCodeResponse}
                  eventId={formData.eventId}
                  total={ticketCartDetails.total}
                />
              )}

              {ticketDetails.hasPromoCode && promoCodeResponse !== null && (
                <div
                  className="border rounded d-flex justify-content-between px-3 py-3 text-white mt-2 position-relative"
                  style={{
                    backgroundColor: "#4C4C4C",
                  }}
                >
                  <Text size="md" fw={700}>
                    {promoCodeResponse.discountType}
                  </Text>

                  <div className="text-center">
                    <Text size="md" fw={700} c={"#0DD750"}>
                      {promoCodeResponse.promoCode}
                    </Text>
                    <Text size="sm" fw={700} c={"#7F7F7F"}>
                      valid till {formatDate(promoCodeResponse.validTill)}
                    </Text>
                  </div>

                  <div
                    style={{ fontSize: "21px" }}
                    class="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-transparent text-danger
                  cursor-pointer
                  "
                  >
                    <MdCancel
                      onClick={() => {
                        handleCancelPromoCode();
                      }}
                    />
                  </div>
                </div>
              )}

              <Button color="rgba(300, 118, 0, 1)" className="mt-3"
              onClick={()=>makePayment(paymentDetails)}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketModalContent;
