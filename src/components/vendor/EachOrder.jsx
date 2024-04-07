import React from 'react'
import formatDate from '../utilities/formatDate'

const EachOrder = ({order}) => {
  return (
    <tr className='eachEventRow border-bottom'>
        <td>{order.orderId}</td>
        <td>{order.purchasedBy}</td>
        <td>{order.quantity}</td>
        <td>Rs {order.price}</td>
        <td>{formatDate(order.purchasedDate)}</td>
    </tr>
  )
}

export default EachOrder