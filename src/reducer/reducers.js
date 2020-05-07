import {combineReducers} from 'redux';

import {DATA_AVAILABLE, DELETE_SINGLE} from "../action/actions"

let dataState = {data: []};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return {...state, data: action.data};
        case DELETE_SINGLE: {
            console.log(JSON.stringify(state.data.length))
            return {
                data: state.data.filter(o => {
                    return o.title != action.data
                })
            };
        }
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;
