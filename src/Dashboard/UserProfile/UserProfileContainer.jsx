import React from "react";
import UserProfile from "./UserProfile";
import { setUserData, updateFIOProfileText, updatePhoneProfileText, updateEmailProfileText, updateAddressProfileText, updateRoleProfileText} from "../../Redux/profile-reducer";
import { connect } from "react-redux";
import * as axios from 'axios';
import UserProfileAPIComponent from "./UserProfileAPIComponent";
import { withRouter } from "react-router-dom";




// class UserProfileContainer extends React.Component{


//   render(){
//     debugger;
//     return (
//       <UserProfile 
//       //{...this.props} 
//       userData = {this.props.userData}
//       />

//     )
//   }
// }




const mapStateToProps = (state) => {
  return {
    
    userData: state.profile.userData,

    FIO: state.profile.FIO,
    phone: state.profile.phone,
    email: state.profile.email,
    address: state.profile.address,
    role: state.profile.role
  }

}

let apiwithrouter = withRouter(UserProfileAPIComponent);
const UserProfileContainer = connect(mapStateToProps, {
  
  setUserData,
  updateFIOProfileText,
  updatePhoneProfileText,
  updateEmailProfileText,
  updateAddressProfileText,
  updateRoleProfileText



})(apiwithrouter);




export default UserProfileContainer;