import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../store/actions';
import Event from './Event/Event';
import Pagination from '../Pagination/Pagination';
import { isArrayNotEmpty, debounce, isEmpty, isArrayEmpty } from '../../helpers/miscellenous';
import './History.css';
import Search from '../Search/Search';

const History = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [itemsPerPage] = useState(8);
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        props.onGetSpacexHistory();
        return (() => {
            props.onEmptySpacexHistory();
        })
    }, []);

    useEffect(() => {
        if (isArrayNotEmpty(props.spacexHistory)) {
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(props.spacexHistory.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
            setPageNumbers(pageNumbers);
        }
    }, [props.spacexHistory]);

    const search = debounce((value) => {
        let searchedData = [];
        if (!isEmpty(value)) {
            searchedData = props.spacexHistory.filter((item) => {
                return item.title.toLowerCase().search(value.toLowerCase()) !== -1;
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
            <Search placeholder={'Search by title'} search={(value) => search(value)} />
            <div className="space-x-history">
                {
                    !isEmpty(searchValue) ?
                        searchedData.slice(indexOfFirstItem, indexOfLastItem).map(item => {
                            return <Event details={item} key={item.id} />
                        })
                        :
                        props.spacexHistory.slice(indexOfFirstItem, indexOfLastItem).map(item => {
                            return <Event details={item} key={item.id} />
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
        spacexHistory: state.history.spacexHistory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetSpacexHistory: () => dispatch(actionCreaters.getSpacexHistory()),
        onEmptySpacexHistory: () => dispatch(actionCreaters.emptySpacexHistory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);