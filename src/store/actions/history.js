import * as actionTypes from './actionTypes';
import axios from '../../httpInstance/axios';

export const setSpacexHistory = (spacexHistory) => ({
    type: actionTypes.SET_SPACEX_HISTORY,
    spacexHistory
});

export const getSpacexHistory = () => {
    return dispatch => {
        axios.get(`https://api.spacexdata.com/v3/history`)
            .then(response => {
                if (response.data) {
                    dispatch(setSpacexHistory(response.data));
                }
            })
            .catch(error => {

            });
    };
};

export const emptySpacexHistory = () => ({
    type: actionTypes.EMPTY_SPACEX_HISTORY,
});
