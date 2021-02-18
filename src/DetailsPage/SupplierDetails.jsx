import React from 'react'
import { ListGroup } from 'react-bootstrap'

function SupplierDetails ({ supplier }) {

    return (
        <>
            <ListGroup>
                <ListGroup.Item>
                    Supplier ID: {supplier.shipperID}
                </ListGroup.Item>
                <ListGroup.Item>
                    Company Name: {supplier.CompanyName}
                </ListGroup.Item>
                <ListGroup.Item>
                    Phone: {supplier.Phone}
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
export default SupplierDetails