export default function filterEventsByTicketType(events, ticketType){

    if(ticketType==="Free"){
        events= events.filter(each=>(
            each.ticketType==="Free"
        ))
    }

    else if(ticketType==="Paid"){
        events= events.filter(each=>(
            each.ticketType==="Paid"
        ))
    }

    else if(ticketType==="Donation"){
        events= events.filter(each=>(
            each.ticketType==="Donation"
        ))
    }


    return events;
}