import axios from "axios";
import {GET_ERRORS,GET_BATCHS,DELETE_BATCH,GET_BATCH} from "./types";



export const createBatch = (batch,navigate)=>async(dispatch)=>{
    try{
        const res = await axios.post("http://localhost:8080/api/Batch",batch);
        navigate("/listBatch");
    }catch(error){
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        });
    }
}

export const getBatchs = () => async(dispatch)=>{
    const res = await axios.get("http://localhost:8080/api/Batch/all");
    
       dispatch({
        type:GET_BATCHS,
        payload:res.data,
       });
    
};

export const deleteBatch = (id) => async(dispatch)=>{

    if(window.confirm("Are you sure? This will delete the batch and the data releated to it.")){
        const res = await axios.delete(`http://localhost:8080/api/Batch/${id}`);

    dispatch({
        type:DELETE_BATCH,
        payload:id,

    })
    }
    

}

export const getBatch = (id) => async(dispatch)=>{
    const res = await axios.get(`http://localhost:8080/api/Batch/${id}`);
    dispatch({
        type:GET_BATCH,
        payload:res.data,
    });
};