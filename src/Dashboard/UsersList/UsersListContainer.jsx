import React from "react";
import Userslist from "./UsersList";
//import { updateSearchTextActionCreator, updateDateFromActionCreator, updateDateToActionCreator, searchCustomersActionCreator } from "../../Redux/userslist-reducer";
import { connect } from "react-redux";
import * as axios from 'axios';
import { updateSearchText, updateDateFrom, updateDateTo, searchCustomers } from "../../Redux/userslist-reducer";
  


const mapStateToProps = (state) => {
  return {
    clients: state.userslist.clients,
    newSearchText: state.userslist.newSearchText,
    newDateFrom: state.userslist.newDateFrom,
    newDateTo: state.userslist.newDateTo
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateSearchText: (text) => {
//       let action = updateSearchTextActionCreator(text);
//       dispatch(action);
//     },
//     updateDateFrom: (text) => {
//       let action = updateDateFromActionCreator(text);
//       dispatch(action);
//     },

//     updateDateTo: (text) => {
//       let action = updateDateToActionCreator(text);
//       dispatch(action);
//     },

//     searchCustomers: (clients) => {
//       let action = searchCustomersActionCreator(clients);
//       dispatch(action);
//     },

//     setUsers: (clients) => {
//       let action = searchCustomersActionCreator(clients);
//       dispatch(action);
//     }

//   }
// }

//const UserslistContainer = connect(mapStateToProps, mapDispatchToProps)(Userslist);

const UserslistContainer = connect(mapStateToProps, {

  updateSearchText,
  updateDateFrom,
  updateDateTo,
  searchCustomers

})(Userslist);




export default UserslistContainer;