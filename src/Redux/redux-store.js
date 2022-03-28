import {combineReducers, createStore} from "redux";
import userProfileReducer from "./profile-reducer";
import userslistReducer from "./userslist-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    userslist: userslistReducer,
    profile: userProfileReducer,
    auth: authReducer

});

let store = createStore(reducers);

window.store = store;

export default store;
