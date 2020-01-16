import React, {useState, useEffect} from "react";
import {PaginationItem, Pagination, PaginationLink} from 'reactstrap';

const PaginationComponent = ({totalItems, pageSize, changePage, classStyle}) => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setCurrentPage(0);
    }, [totalItems]);

    function handleClick(e, index) {
        e.preventDefault();
        changePage(index);
        setCurrentPage(index);
    }

    return (
        <div className="text-center pt-5" style={{marginTop: '10px', margin: 'auto', width: 'max-content'}}>
            <Pagination aria-label="Page navigation">
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink className={`${classStyle} pagination-buttons d-flex flex-column justify-content-center`} onClick={e => handleClick(e, currentPage - 1)} previous href="#"/>
                </PaginationItem>
                {[...Array(Math.ceil(totalItems / pageSize))].map((page, i) => {
                        return ((i > currentPage - 3 && i < currentPage + 3 && currentPage >= 3) || (i < 5 && currentPage < 3)) ?
                            <PaginationItem className="pr-4 pl-4 my-auto" key={i}>
                                {/*<PaginationLink onClick={e => handleClick(e, i)} href="#">{i + 1}</PaginationLink>*/}
                                <span className="pagination-text">1/3</span>
                            </PaginationItem> : null
                    }
                )}
                <PaginationItem disabled={currentPage >= (totalItems / pageSize - 1)}>
                    <PaginationLink className={`${classStyle} pagination-buttons d-flex flex-column justify-content-center`} onClick={e => handleClick(e, currentPage + 1)} next href="#"/>
                </PaginationItem>
            </Pagination>
        </div>
    );
}

export default PaginationComponent;