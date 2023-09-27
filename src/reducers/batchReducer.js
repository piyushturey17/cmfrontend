import { DELETE_BATCH, GET_BATCH, GET_BATCHS } from "../actions/types"
const initialState={
    batchs:[]
}
export default function(state=initialState,action){
    
    switch(action.type){
        case GET_BATCHS:
            return{
                ...state,
                batchs:action.payload,
            };
        case GET_BATCH:
            return{
                ...state,
                batch:action.payload,
            };
        case DELETE_BATCH:
            return{
                ...state,
                batchs:state.batchs.filter(
                    (batch)=>batch.batchIdentifier!=action.payload

                ) 
            }
            default:
                return state;
    }
}