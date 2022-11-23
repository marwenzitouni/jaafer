import { GET_CURRENT_USER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "../consts/userConsts";


const initialstate = {load:false,user:{},errors:null} 
export const userReducer = (state=initialstate,{type,payload})=>{
    
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return({...state,user:payload.user}) 
        case GET_CURRENT_USER_SUCCESS :
            return ({...state,user:payload})  
        case LOGOUT : 
        localStorage.removeItem("token")
        return { load: false, user: {}, errors: null };     
        default:
            return state;
    }
}