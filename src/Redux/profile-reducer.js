
import React from "react";
const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_FIO_PROFILE_TEXT = 'UPDATE_FIO_PROFILE_TEXT';
const UPDATE_EMAIL_PROFILE_TEXT = 'UPDATE_EMAIL_PROFILE_TEXT';
const UPDATE_PHONE_PROFILE_TEXT = 'UPDATE_PHONE_PROFILE_TEXT';
const UPDATE_ADDRESS_PROFILE_TEXT = 'UPDATE_ADDRESS_PROFILE_TEXT';
const UPDATE_ROLE_PROFILE_TEXT = 'UPDATE_ROLE_PROFILE_TEXT';

let initialState ={

    userData: {
      
    }
}

const userProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:{
            let stateCopy = {...state};
            stateCopy.userData = action.userData;
            return stateCopy;
        }

        case UPDATE_FIO_PROFILE_TEXT:{
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.name = action.textInp;
            return stateCopy;
        }

        case UPDATE_PHONE_PROFILE_TEXT:{
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.phone = action.textInp;
            return stateCopy;
        }

        case UPDATE_EMAIL_PROFILE_TEXT:{
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.email = action.textInp;
            return stateCopy;
        }

        case UPDATE_ADDRESS_PROFILE_TEXT:{
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.address = action.textInp;
            return stateCopy;
        }

        case UPDATE_ROLE_PROFILE_TEXT:{
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.role = action.textInp;
            return stateCopy;
        }



        default:
            return state;
    }
}

export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        userData: userData
    }
}

export const updateFIOProfileText = (text) => {
    return {
        type: UPDATE_FIO_PROFILE_TEXT,
        textInp: text
    }
}

export const updatePhoneProfileText = (text) => {
    return {
        type: UPDATE_PHONE_PROFILE_TEXT,
        textInp: text
    }
}

export const updateEmailProfileText = (text) => {
    return {
        type: UPDATE_EMAIL_PROFILE_TEXT,
        textInp: text
    }
}

export const updateAddressProfileText = (text) => {
    return {
        type: UPDATE_ADDRESS_PROFILE_TEXT,
        textInp: text
    }
}
             
export const updateRoleProfileText = (text) => {
    return {
        type: UPDATE_ROLE_PROFILE_TEXT,
        textInp: text
    }
}

  
 

export default userProfileReducer;