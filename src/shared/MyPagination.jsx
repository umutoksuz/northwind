import React from 'react'
import { Pagination } from 'react-bootstrap'

function MyPagination({ current, maxPages, onPageChange }) {

    return (
        <Pagination>
            <Pagination.First onClick={()=>onPageChange(1)}/>
            {
                current - 2 >= 2 ? 
                <Pagination.Ellipsis /> : null
            }
            {
                current - 2 > 0 ?
                    <Pagination.Item onClick={()=>onPageChange(current-2)}>{current - 2}</Pagination.Item> :
                    null
            }
            {
                current - 1 > 0 ?
                    <Pagination.Item onClick={()=>onPageChange(current-1)}>{current - 1}</Pagination.Item> :
                    null
            }
            <Pagination.Item active>{current}</Pagination.Item>
            {
                maxPages !== current ?
                    <Pagination.Item onClick={()=>onPageChange(current+1)}>{current + 1}</Pagination.Item> :
                    null
            }
            {
                maxPages > current + 1 ? 
                    <Pagination.Item onClick={()=>onPageChange(current+2)}>{current + 2}</Pagination.Item> :
                    null
            }
            {
                maxPages > current + 2 ? 
                <Pagination.Ellipsis /> : null
            }
            <Pagination.Last onClick={()=>onPageChange(maxPages)}/>
        </Pagination>
    )
}

export default MyPagination