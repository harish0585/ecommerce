import axios from "axios";
import { PRODUCT_API_FAILURE, PRODUCT_API_REQUEST, PRODUCT_API_SUCCESS } from "./constants"


export const getApiData = (city) => async(dispatch) => {
    try {
      dispatch({ type: PRODUCT_API_REQUEST});

    const {data} = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    console.log(data, "checking");
    
    dispatch({ type: PRODUCT_API_SUCCESS, payload: data.data })

     } catch(error) {
       dispatch({
        type: PRODUCT_API_FAILURE,
        payload: error.message
       })
    }
}