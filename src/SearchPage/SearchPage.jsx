import React, { useState, useEffect } from 'react'
import SearchGrid from './SearchGrid'
import SearchFilter from './SearchFilter'
import ODataNorthwindApi from '../Service/ODataNorthwindApi';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import MyPagination from '../shared/MyPagination';

const PAGE_SIZE = 10;

function SearchPage(props) {
    const [orderCount, setOrderCount] = useState();
    const [pageCount, setPageCount] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [customerID, setCustomerID] = useState('');
    const [orderID, setOrderID] = useState('');
    const [pageNo, setPageNo] = useState(1);

    useEffect(()=>{
        ODataNorthwindApi.searchOrders(pageNo, PAGE_SIZE, customerID, orderID)
            .then(response => {
                if(response.status === 200) {
                    response.json().then(content => {
                        setTableData(content.d.results);
                        console.log(content);
                        setOrderCount(content.d.__count);
                        setPageCount(Math.ceil(content.d.__count/PAGE_SIZE));
                    })
                } else {
                    console.log(response.status);
                }
            })
    }, [orderID, customerID, pageNo]);

    const onOrderIdChange = (e) => {
        setOrderID(e.target.value);
        console.log(e.target.value);
    }

    const onCustomerIdChange = (e) => {
        setCustomerID(e.target.value);
        console.log(e.target.value);
    }


    const onPageChange = (pageNo) => {
        setPageNo(pageNo);
    } 

    return (
        <Container>
            <Col>
                <Row>
                    <Col md={3}>
                        <SearchFilter
                            orderId={orderID}
                            customerId={customerID}
                            onOrderIdChange={onOrderIdChange}
                            onCustomerIdChange={onCustomerIdChange}
                        />
                    </Col>
                    <Col>
                        <SearchGrid tableData={tableData} />
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