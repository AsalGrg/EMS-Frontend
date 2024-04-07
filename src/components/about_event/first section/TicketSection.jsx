import { useDisclosure } from "@mantine/hooks";
import React from "react";
import TicketModal from "./TicketModal";
import { IconHeart, IconHeartFilled, IconShare2 } from "@tabler/icons-react";
import { Button, Tooltip } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import like_event from "../../../services/user/like_event";
import { useParams } from "react-router";
import { likeEventState, unlikeEventState } from "../../../pages/about_event/AboutEventSlice";
import unlike_event from "../../../services/user/unlike_event";
import make_payment from "../../../services/user/make_payment";

const TicketSection = () => {

  const {id}= useParams();

  const [opened, { open, close }] = useDisclosure(false);
  const formData = useSelector((state) => state.aboutEvent);
  const dispatch = useDispatch();

  const likeEvent= async ()=>{
    console.log("here")
    const res= await like_event(id)
    if(res.ok){
      dispatch(likeEventState())
    }
  }

  const unlikeEvent= async ()=>{
    console.log("dkk")
    const res= await unlike_event(id)
    if(res.ok){
      console.log("first")
      dispatch(unlikeEventState())
    }
  }

  
  async function makePayment(paymentDetails){

    console.log(paymentDetails)
    const res = await make_payment(paymentDetails);

    if(res.ok){
      const data = await res.text();
      console.log(data) 
    }
  }
  return (
    <section>
      <TicketModal opened={opened} close={close} makePayment={makePayment}/>

      {/* share and like icons */}
      <div className="d-flex justify-content-end">
        {!formData.hasLiked ? (
          <Tooltip label="Like"
          >
            <IconHeart size={25} className="me-4"
            onClick={()=> likeEvent()} 
            />
          </Tooltip>
        ) : (
          <Tooltip label="Unlike"
          onClick={()=> unlikeEvent()}
          >
            <IconHeartFilled
              size={25}
              className="me-4 text-danger cursor-pointer"
              color="red"
            />
          </Tooltip>
        )}
        <Tooltip label="Share">
          <IconShare2 size={25} />
        </Tooltip>
      </div>

      <div className="border rounded py-3 px-4 mt-5">
        <p className="text-center text-secondary fw-bold mb-4 lead">
          {formData.ticketDetails.ticketPrice
            ? "From Rs " + formData.ticketDetails.ticketPrice
            : "from $0"}
        </p>
        <Button
          variant="filled"
          color="rgba(300, 118, 0, 1)"
          fullWidth
          size="md"
          onClick={open}
        >
          Buy Tickets
        </Button>
      </div>
    </section>
  );
};

export default TicketSection;
