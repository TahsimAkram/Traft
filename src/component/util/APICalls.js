import axios from "axios";
import { Traft_AddTask_Api, Traft_DeleteTask_Api, Traft_GetTasks_Api, Traft_Login_Api, Traft_UpdateTask_Api } from "./APIs";


export const signIn = async (payload)=>{
    try{
        const data = await axios.post(Traft_Login_Api,payload)
        return data;
    }catch(error){
        if(error.response) {
            const {status} = error.response;
            if(status === 401){
                const customError = new Error(
                    error.response.data.message || "An error occurred"
                );
                customError.status = status;
                throw customError;
            }
        }
    }
    
 }


export const fetchTask = async ()=>{
    const jwtToken = localStorage.getItem("token");
    const header = {'Authorization':`Bearer ${jwtToken}`};
    try{
        const {data} = await axios.get(Traft_GetTasks_Api,{headers:header});
        return data;
    } catch(error){
        if(error.response) {
            const {status} = error.response;
            if(status === 401){
                const customError = new Error(
                    error.response.data.message || "An error occurred"
                );
                customError.status = status;
                throw customError;
            }
        }
    }

}

export const addTask = async (task)=>{
    const jwtToken = localStorage.getItem("token");
    const headers = {'Authorization':`Bearer ${jwtToken}`};
    await axios.post(Traft_AddTask_Api,task,{headers})
}



 export const deleteTask =  async (id)=>{
    const jwtToken = localStorage.getItem("token");
    const headers = {'Authorization':`Bearer ${jwtToken}`};
    const url = `${Traft_DeleteTask_Api}${id}`;
    await axios.delete(url,{headers})
 }

 export const updateTask = async (task)=> {
    const jwtToken = localStorage.getItem("token");
    const headers = {'Authorization':`Bearer ${jwtToken}`,'Content-Type': 'application/json'};
    await axios.put(Traft_UpdateTask_Api,task,{headers})
 }