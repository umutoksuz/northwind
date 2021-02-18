import React from 'react'
import { Table } from 'react-bootstrap'


function OrderDetails({ orderDetails }) {


    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderDetails.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td>{order.ProductID}</td>
                                <td>{order.Quantity}</td>
                                <td>{order.UnitPrice}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    )
}
export default OrderDetails