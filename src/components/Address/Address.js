import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../store/actions';
import Payload from './Payload/Payload';
import { isArrayNotEmpty, debounce, isEmpty, isArrayEmpty } from '../../helpers/miscellenous';
import './Address.css';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';

const Address = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [itemsPerPage] = useState(12);
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        props.onGetSpacexAddress();
        return (() => {
            props.onEmptySpacexAddress();
        })
    }, []);

    useEffect(() => {
        if (isArrayNotEmpty(props.spacexAddress)) {
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(props.spacexAddress.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
            setPageNumbers(pageNumbers);
        }
    }, [props.spacexAddress]);

    const search = debounce((value) => {
        let searchedData = [];
        if (!isEmpty(value)) {
            searchedData = props.spacexAddress.filter((item) => {
                return item.payload_id.toLowerCase().search(value.toLowerCase()) !== -1;
            });
        }
        setSearchedData(searchedData.slice(0, itemsPerPage));
        setSearchValue(value);
    }, 500);

    const updateCurrentPage = (number) => {
        setCurrentPage(Number(number));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return (
        <>
            {/* <div className="space-x-address">
                {
                    props.spacexAddress.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => {
                        return <Payload details={item} key={index} />
                    })
                }
            </div>
            <Pagination pageNumbers={pageNumbers} updateCurrentPage={(number) => updateCurrentPage(number)} />
             */}
            <Search placeholder={'Search by Payload Id'} search={(value) => search(value)} />
            <div className="space-x-address">
                {
                    !isEmpty(searchValue) ?
                        searchedData.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => {
                            return <Payload details={item} key={index} />
                        })
                        :
                        props.spacexAddress.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => {
                            return <Payload details={item} key={index} />
                        })
                }
            </div>
            {
                !isEmpty(searchValue) && isArrayEmpty(searchedData) &&
                <div className="no-data">
                    <h3>No Data Found</h3>
                </div>
            }
            {
                isEmpty(searchValue) &&
                <Pagination
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    updateCurrentPage={(number) => updateCurrentPage(number)} />
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        spacexAddress: state.address.spacexAddress
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetSpacexAddress: () => dispatch(actionCreaters.getSpacexAddress()),
        onEmptySpacexAddress: () => dispatch(actionCreaters.emptySpacexAddress())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);