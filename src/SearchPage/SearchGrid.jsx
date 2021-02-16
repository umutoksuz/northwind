import React, { useState, useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap'


function SearchGrid({tableData}) {

    

    return (
        <>
            <Table responsive hover variant='dark'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer ID</th>
                        <th>Customer Company</th>
                        <th>Contact Name</th>
                        <th>Supplier Company</th>
                        <th>Supplier Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((order, index) => {
                            return (
                                <tr key={index} onClick={() => console.log(order)}>
                                    <td>{order.OrderID}</td>
                                    <td>{order.CustomerID}</td>
                                    <td>{order.Customer.CompanyName}</td>
                                    <td>{order.Customer.ContactName}</td>
                                    <td>{order.Shipper.CompanyName}</td>
                                    <td>{order.Shipper.Phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default SearchGrid