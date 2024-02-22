import React from "react";
import { useCreateEventContext } from "../../../context/CreateEventContext";
import { Text } from "@mantine/core";

const TicketOptionSelector = () => {
  const normal =
    "d-flex justify-content-between align-items-center col-12 px-4 py-3 rounded-3 border border-2";
  const selectedClasses = normal + "text-primary border-primary";

  const errorsClasses = normal + "text-primary border-danger";

  const { handleChange, values, errors, touched } = useCreateEventContext();

  const hasErrors =
    (errors.ticketName && touched.ticketName) ||
    (errors.ticketPrice && touched.ticketPrice) ||
    (errors.ticketQuantity && touched.ticketQuantity) ||
    (errors.ticketSaleDates && touched.ticketSaleDates) ||
    (errors.saleStartTime && touched.saleStartTime) ||
    (errors.saleEndTime && touched.saleEndTime)
      ? true
      : false;

  const univeralErrorMessage = (
    <Text size="md" c={"red"}>
      Please fill details properly
    </Text>
  );

  function handleTicketTypeChange(ticketType) {
    handleChange({
      target: {
        name: "ticketType",
        value: ticketType,
      },
    });
  }
  return (
    <div className="row gy-3">
      <div
        className={
          values.ticketType === "paid"
            ? hasErrors
              ? errorsClasses
              : selectedClasses
            : normal
        }
        role="button"
        onClick={() => handleTicketTypeChange("paid")}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="ticketOptionImage">
          <img src="src\assets\dollar.png" alt="" className="img-fluid" />
        </div>
        <div className="description">
          <h3>Paid</h3>
          <p className="d-none d-md-block">
            Create ticket people have to pay for.
          </p>
        </div>

        <div>
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>

      {hasErrors && touched && values.ticketType === "paid"
        ? univeralErrorMessage
        : null}

      <div
        className={
          values.ticketType === "free"
            ? hasErrors
              ? errorsClasses
              : selectedClasses
            : normal
        }
        role="button"
        onClick={() => handleTicketTypeChange("free")}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="ticketOptionImage">
          <img src="src\assets\free.png" alt="" className="img-fluid" />
        </div>
        <div className="description">
          <h3>Free</h3>
          <p className="d-none d-md-block">
            Create ticket noone has to pay for.
          </p>
        </div>

        <div>
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
      {hasErrors && touched && values.ticketType === "free"
        ? univeralErrorMessage
        : null}

      <div
        className={
          values.ticketType === "donation"
            ? hasErrors
              ? errorsClasses
              : selectedClasses
            : normal
        }
        role="button"
        onClick={() => handleTicketTypeChange("donation")}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="ticketOptionImage">
          <img src="src\assets\donate.png" alt="" className="img-fluid" />
        </div>
        <div className="description">
          <h3>Donation</h3>
          <p className="d-none d-md-block">
            Let people pay any amount for their ticket.
          </p>
        </div>

        <div>
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>

      {hasErrors && touched && values.ticketType === "donation"
        ? univeralErrorMessage
        : null}
    </div>
  );
};

export default TicketOptionSelector;
