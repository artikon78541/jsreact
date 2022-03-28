import React from "react";
const SET_USER = 'SET_USER';


let initialState ={

    authUserData: {

        email: null,
        password: null,
        Id: null,
        isAuth: false
      
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:{
            let stateCopy = {...state};
            stateCopy.userData = action.userData;
            return stateCopy;
        }



        default:
            return state;
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        authUserData: user
    }
}


  
 

export default authReducer;