
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    spacexAddress: []
};

const setSpacexAddress = (state, action) => {
    return updateObject(state, {
        spacexAddress: action.spacexAddress
    });
};

const emptySpacexAddress = (state, action) => {
    return updateObject(state, {
        spacexAddress: []
    });
};

const Address = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SPACEX_ADDRESS:
            return setSpacexAddress(state, action);
        case actionTypes.EMPTY_SPACEX_ADDRESS:
            return emptySpacexAddress(state, action);
        default:
            return state;
    }
};

export default Address;
