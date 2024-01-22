import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";

const TicketOptionSelector = ({ setTicketOption, ticketOption }) => {
  const normal =
    "d-flex justify-content-between align-items-center col-12 px-4 py-3 rounded-3 border border-2";
  const selectedClasses = normal + " text-primary border-primary";

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createEvent);

  return (
    <div className="row gy-3">
      <div
        className={formData.ticketType === "paid" ? selectedClasses : normal}
        role="button"
        onClick={() =>
          dispatch(
            updateCreateEventField({
              field: "ticketType",
              value: "paid",
            })
          )
        }
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

      <div
        className={formData.ticketType === "free" ? selectedClasses : normal}
        role="button"
        onClick={() =>
          dispatch(
            updateCreateEventField({
              field: "ticketType",
              value: "free",
            })
          )
        }
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

      <div
        className={
          formData.ticketType === "donation" ? selectedClasses : normal
        }
        role="button"
        onClick={() =>
          dispatch(
            updateCreateEventField({
              field: "ticketType",
              value: "donation",
            })
          )
        }
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
    </div>
  );
};

export default TicketOptionSelector;
