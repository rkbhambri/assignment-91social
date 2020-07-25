
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    spacexHistory: []
};

const setSpacexHistory = (state, action) => {
    return updateObject(state, {
        spacexHistory: action.spacexHistory
    });
};

const emptySpacexHistory = (state, action) => {
    return updateObject(state, {
        spacexHistory: []
    });
};

const History = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SPACEX_HISTORY:
            return setSpacexHistory(state, action);
        case actionTypes.EMPTY_SPACEX_HISTORY:
            return emptySpacexHistory(state, action);
        default:
            return state;
    }
};

export default History;
