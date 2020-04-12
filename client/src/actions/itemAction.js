import {GET_ITEMS, DEL_ITEM,ADD_ITEM, ITEMS_LOADING} from './types'
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/Items') //since we have written proxy in json no need to perform exact url
        .then(res=>
            dispatch({
                type:GET_ITEMS,
                payload:res.data
            })
        )    
}

export const deleteItem = (itemId) => dispatch =>{
   axios.delete(`http://localhost:5000/api/Items/${itemId}`)
        .then(res =>
            dispatch({
                type:DEL_ITEM,
                payload:itemId
            })
        )
}

export const addItem= (item)=> dispatch =>{
    axios.post('http://localhost:5000/api/Items',item)
        .then(res=>
            dispatch({
                type:ADD_ITEM,
                payload:res.data
            }))
}

export const setItemsLoading= () =>{
    return{
        type:ITEMS_LOADING
    }
}