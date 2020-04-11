import uuid from 'react-uuid'
import {GET_ITEMS, DEL_ITEM, ADD_ITEM} from '../actions/types'

const initialState = {
    items:[
        {id:uuid(),name:'Eggs'},
        {id:uuid(),name:'Bread'},
        {id:uuid(),name:'Milk'},
        {id:uuid(),name:'Jam'}
    ]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
                
            }
        case DEL_ITEM:
            return {
                ...state,
                items:state.items.filter(item => item.id !=action.payload)
            }
        case ADD_ITEM:
            return{
                ...state,
                items:[action.payload,...state.items]
            }    
        default:
            return state;
               
    }
}