import React from 'react'
import { ListGroup } from 'react-bootstrap'


function CustomerDetails({ customer }) {

    return (
        <>
            <ListGroup>
                <ListGroup.Item>
                    Customer ID: {customer.CustomerID}
                </ListGroup.Item>
                <ListGroup.Item>
                    Company Name: {customer.CompanyName}
                </ListGroup.Item>
                <ListGroup.Item>
                    Contact Name: {customer.ContactName}
                </ListGroup.Item>
                <ListGroup.Item>
                    Country: {customer.Country}
                </ListGroup.Item>
                <ListGroup.Item>
                    City: {customer.City}
                </ListGroup.Item>
                <ListGroup.Item>
                    Address: {customer.Address}
                </ListGroup.Item>
                <ListGroup.Item>
                    Phone: {customer.Phone}
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default CustomerDetails