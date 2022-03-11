import { SET_FILTER } from "./actionTypes";

const setLoadingAction = (filterSelected: any) => async (dispatch: any) => {
  dispatch({
    type: SET_FILTER,
    payload: {
      filterSelected
    },
  });
};

export default setLoadingAction;
