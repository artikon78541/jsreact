import React from "react";
import * as axios from 'axios';
import { setUserData } from "../../Redux/profile-reducer";
import UserProfile from "./UserProfile";
import { withRouter } from "react-router-dom";


class UserProfileAPIComponent extends React.Component{

    componentDidMount() {
        this.props.setUserData({});
        let id = this.props.match.params.id;
        axios.get('https://localhost:5001/api/Customer/' + id)
            .then(response => {
                this.props.setUserData(response.data);
            });
            
    }

  render(){
    return (
      <UserProfile 
      {...this.props} 
      //userData = {this.props.userData}
      />

    )
  }
}

export default UserProfileAPIComponent;