import React from "react";
import NoOrders from "../global/NoOrders";
import EachOrder from "./EachOrder";
import EachPromoCode from "./EachPromoCode";
import { useSelector } from "react-redux";

//accepts array of orders
const EventPromoCodesTable = () => {

  const promoCodeDetails = useSelector(state=> state.eventDescription).promoCodeDetailsDtos;


  return (
    <>
      <table className="eventTable w-100">
        <tr className="eventTable-headers">
          <th>Code title</th>
          <th>Merit</th>
          <th>Applicable from</th>
          <th>Limit</th>
          {/* <th>Available</th> */}
          <th>Valid till</th>
          <th>Active</th>
        </tr>

        {promoCodeDetails.map(each=>(
          <EachPromoCode promoCode={each}/>
        ))}
      </table>

        {promoCodeDetails.count===0 &&  <NoOrders message={"No promo codes for the events"} />}
    </>
  );
};

export default EventPromoCodesTable;
