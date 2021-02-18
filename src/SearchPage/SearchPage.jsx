import React, { useState, useEffect } from 'react'
import SearchGrid from './SearchGrid'
import SearchFilter from './SearchFilter'
import ODataNorthwindApi from '../Service/ODataNorthwindApi';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import MyPagination from '../shared/MyPagination';
import { Redirect } from 'react-router-dom';

const PAGE_SIZE = 10;

function SearchPage(props) {
    const [orderCount, setOrderCount] = useState();
    const [pageCount, setPageCount] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [customerID, setCustomerID] = useState('');
    const [orderID, setOrderID] = useState('');
    const [productID, setProductID] = useState('');
    const [pageNo, setPageNo] = useState(1);

    useEffect(()=>{
        ODataNorthwindApi.searchOrders(pageNo, PAGE_SIZE, customerID, orderID, productID)
            .then(response => {
                response.json().then(content => {
                    setTableData(content.value);
                    console.log(content);
                    console.log(content['@odata.count'])
                    setOrderCount(content['@odata.count']);
                    setPageCount(Math.ceil(content['@odata.count']/PAGE_SIZE));
                })  
                if(response.status === 200) {
                    
                } else {
                    console.log(response.status);
                }
            })
    }, [orderID, customerID, productID, pageNo]);

    const onOrderIdChange = (e) => {
        setOrderID(e.target.value);
        console.log(e.target.value);
        setPageNo(1);
    }

    const onCustomerIdChange = (e) => {
        setCustomerID(e.target.value);
        console.log(e.target.value);
        setPageNo(1);
    }

    const onProductIdChange = (e) => {
        setProductID(e.target.value);
        console.log(e.target.value);
        setPageNo(1);
    }


    const onPageChange = (pageNo) => {
        setPageNo(pageNo);
    } 


    return (
        <Container style={{marginTop: '60px'}}>
            <Col>
                <Row>
                    <Col md={3}>
                        <SearchFilter
                            orderId={orderID}
                            customerId={customerID}
                            productId={productID}
                            onOrderIdChange={onOrderIdChange}
                            onCustomerIdChange={onCustomerIdChange}
                            onProductIdChange={onProductIdChange}
                        />
                    </Col>
                    <Col>
                        <SearchGrid tableData={tableData} history={props.history} />
                        <MyPagination 
                            current={pageNo}
                            maxPages={pageCount}
                            onPageChange={onPageChange}
                        />
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default SearchPage