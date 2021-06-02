import { LOGGED_IN,LOGGED_OUT } from "../store/constants";

const initialStateOfUser={
    loggedInUser:"",
}
const userReducer=(currentState=initialStateOfUser,action:any):any=>{
    switch(action.type){
        case LOGGED_IN:
            return{
                ...currentState,
                loggedInUser:action.user,
            }
        case LOGGED_OUT:
                return{
                    ...currentState,
                    loggedInUser:action.user,
                }
    }
}

export {userReducer}

