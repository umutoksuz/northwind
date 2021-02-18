import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import CustomerDetails from './CustomerDetails';
import OrderDetails from './OrderDetails'
import SupplierDetails from './SupplierDetails';

function DetailsPage(props) {

    const order = props.location.state;

    return (
        <Container style={{marginTop: '60px'}}>
            <Col>
                <Row>
                    <Col>
                        <h4>Customer</h4>
                        <CustomerDetails customer={order.Customer} />
                    </Col>
                    <Col>
                        <h4>Supplier</h4>
                        <SupplierDetails supplier={order.Shipper} />
                    </Col>
                </Row>
                <Row style={{marginTop: '40px'}}>
                    <Col>
                        <h4>Products Ordered</h4>
                        <OrderDetails orderDetails={order.Order_Details}/>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}
export default DetailsPage