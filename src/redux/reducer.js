import React from 'react'
import { PRODUCT_API_FAILURE, PRODUCT_API_REQUEST, PRODUCT_API_SUCCESS } from './constants';

const initState = {
    data: [],
    isLoading: false,
    isError : false,
    isUpdated: false
}

export const productsapiReducer = (state = initState, action) => {
  switch(action.type) {
    
    case PRODUCT_API_REQUEST:
        return {
            ...state,
            loading: true
        }

    case PRODUCT_API_SUCCESS:
        console.log(action.payload, "Check Payload");
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            isUpdated: true
        }

    case PRODUCT_API_FAILURE:
        return {
            ...state,
            error: action.payload,
            isError: true,
            isLoading: false
        }

    default:
        return state
  }
}