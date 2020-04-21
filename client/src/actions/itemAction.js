import {GET_ITEMS, DEL_ITEM,ADD_ITEM, ITEMS_LOADING} from './types'
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/Items') //since we have written proxy in json no need to perform exact url
        .then(res=>
            dispatch({
                type:GET_ITEMS,
                payload:res.data
            })
        ).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
          );    
}

export const deleteItem = (itemId) => (dispatch, getState) =>{
   axios.delete(`http://localhost:5000/api/Items/${itemId}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type:DEL_ITEM,
                payload:itemId
            })
        ).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addItem= (item)=> (dispatch, getState) =>{
    axios.post('http://localhost:5000/api/Items',item, tokenConfig(getState))
        .then(res=>
            dispatch({
                type:ADD_ITEM,
                payload:res.data
            })).catch(err =>
                dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setItemsLoading= () =>{
    return{
        type:ITEMS_LOADING
    }
}