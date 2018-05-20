import {combineReducers} from 'redux';
import {PAIRS_REQUEST, PAIRS_SUCCESS, PAIRS_FAILURE} from '../actionCreators';

const items = (state = [], action) => {
    switch (action.type) {
        case PAIRS_SUCCESS:
            return action.payload.pairs;
        default:
            return state;
    }
};

const loadingStatus = (state = false, action) => {
    switch (action.type) {
        case PAIRS_REQUEST:
            return true;
        case PAIRS_SUCCESS:
        case PAIRS_FAILURE:
            return false;
        default:
            return state;
    }
};

const pairs = combineReducers({
    items,
    loadingStatus,
});

export default pairs;