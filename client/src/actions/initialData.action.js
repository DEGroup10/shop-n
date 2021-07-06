import axiosIntance from "../helpers/axios";
import {
  categoryContants,
  locationContants,
  userInitialdata,
} from "./constants";

export const getUserDataAction = () => {
  return async (dispatch) => {
    const res = await axiosIntance.get(`/userData`);
    if (res.status === 200) {
      const { categories, locations } = res.data;
      dispatch({
        type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categories },
      });
      dispatch({
        type: locationContants.GET_ALL_LOCATION_SUCCESS,
        payload: { locations: locations },
      });
    } else {
      dispatch({
        type: categoryContants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const userInitialdataAction = () => {
  return async (dispatch) => {
    const res = await axiosIntance.get(`/userInitialdata`);
    if (res.status === 200) {
      const { user,store } = res.data;
      dispatch({
        type: userInitialdata.GET_USER_DETAILS_SUCCESS,
        payload: { user: user }
      });
    } else {
      console.log("Error");
    }
  };
};


// export const userStoreDataAction = () =>{
//   return async (dispatch) => {
//     const res = await axiosIntance.get(`/userInitialdata`);
//     if (res.status === 200) {
//       const { user,store } = res.data;
//       dispatch({
//         type: userInitialdata.GET_USER_DETAILS_SUCCESS,
//         payload: { user: user }
//       });
//     } else {
//       console.log("Error");
//     }
//   };
// }