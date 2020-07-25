import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';

export const setSpacexAddress = (spacexAddress) => ({
    type: actionTypes.SET_SPACEX_ADDRESS,
    spacexAddress
});

export const getSpacexAddress = () => {
    return dispatch => {
        axios.get(`https://api.spacexdata.com/v3/payloads`)
            .then(response => {
                if (response.data) {
                    dispatch(setSpacexAddress(response.data));
                }
            })
            .catch(error => {

            });
    };
};

export const emptySpacexAddress = () => ({
    type: actionTypes.EMPTY_SPACEX_ADDRESS,
});
