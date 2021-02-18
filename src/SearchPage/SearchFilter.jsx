import React from 'react'
import { Form } from 'react-bootstrap'

function SearchFilter({orderId, onOrderIdChange, customerId, onCustomerIdChange, productId, onProductIdChange}) {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Order ID</Form.Label>
                <Form.Control type='number' placeholder='Order Id' value={orderId} onChange={(e) => onOrderIdChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Customer ID</Form.Label>
                <Form.Control placeholder='Customer Id' value={customerId} onChange={(e) => onCustomerIdChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Product ID</Form.Label>
                <Form.Control type='number' placeholder='Product Id' value={productId} onChange={(e) => onProductIdChange(e)} />
            </Form.Group>
        </Form>
    )
}

export default SearchFilter