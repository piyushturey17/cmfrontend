import axios from "axios";
import {GET_ERRORS,GET_TESTS} from "./types";
import { async } from "q";

export const getTests = () => async(dispatch)=>{
    const res = await axios.get("http://localhost:8080/api/tests/all");
    
       dispatch({
        type:GET_TESTS,
        payload:res.data,
       });
    
}