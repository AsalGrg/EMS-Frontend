import { Switch } from "@mantine/core";
import React from "react";
import formatDate from "../utilities/formatDate";
import active_promo_code from "../../services/user/active_promo_code";
import deactive_promo_code from "../../services/user/deactive_promo_code";
import { useDispatch } from "react-redux";
import { handlePromoCodeActiveStatus } from "../../pages/vendor/event_description/EventDescriptionSlice";

const EachPromoCode = ({promoCode}) => {

  const dispatch = useDispatch();

  const handleToggleChange= async ()=>{

    const payload = {
      bool: !promoCode.active,
      promoId: promoCode.promoCodeId
    }

    let res;
    if(!promoCode.active){
      res = await active_promo_code(promoCode.promoCodeId);
    }else if(promoCode.active){
      res= await deactive_promo_code(promoCode.promoCodeId);
    }

    if(res.ok){
      dispatch(handlePromoCodeActiveStatus(payload))
    }
  }
  return (
    <tr className="eachEventRow border-bottom">
      <td>{promoCode.promCodeName}</td>
      <td>{promoCode.merit}</td>
      <td>{promoCode.applicableFrom}</td>
      <td>{promoCode.limit}</td>
      {/* <td>{promoCode.available}</td> */}
      <td>{formatDate(promoCode.expiryDate)}</td>
      <td>
        <Switch color="rgba(0, 0, 0, 1)"  
        checked={promoCode.active}
        onChange={()=> handleToggleChange()}
        />
      </td>
    </tr>
  );
};

export default EachPromoCode;
