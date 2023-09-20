import axios from "axios";
import {GET_ERRORS,GET_TESTS} from "./types";



export const createTest = (test)=>async(dispatch)=>{
    try{
        const res = await axios.post("http://localhost:8080/api/tests",test);
        
    }catch(error){
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        });
    }
}

export const getTests = () => async(dispatch)=>{
    const res = await axios.get("http://localhost:8080/api/tests/all");
    
       dispatch({
        type:GET_TESTS,
        payload:res.data,
       });
    
}