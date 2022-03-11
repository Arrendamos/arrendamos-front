import { SET_FILTER } from "../actions/actionTypes"

const filterReducer = (state: any, action: any) => {
    if (!state) state = {}
    if (action.type === SET_FILTER) {
        return {
            ...state,
            filterOpen: action.payload.filterSelected,
        };
    } else {
        return state;
    }
};

export default filterReducer;
