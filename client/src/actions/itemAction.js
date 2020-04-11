import {GET_ITEMS, DEL_ITEM,ADD_ITEM} from './types'

export const getItems = () => {
    return {
        type:GET_ITEMS
    }
}

export const deleteItem = (itemId) =>{
    return{
        type: DEL_ITEM,
        payload: itemId
    }
}

export const addItem= (item)=>{
    return{
        type:ADD_ITEM,
        payload:item
    }
}