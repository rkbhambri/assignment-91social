
import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    return (
        <div className="pagination">
            {
                props.pageNumbers.map(item => {
                    return (
                        <div
                            key={item}
                            id={item}
                            className="page-number"
                            style={{ background: props.currentPage === item ? '#ddd' : '#fff' }}
                            onClick={(event) => props.updateCurrentPage(event.target.id)}>
                            {item}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Pagination;
