import React from "react";
import * as axios from 'axios';
import cl from './UserProfile.module.css';
import { setUserData, updateFIOProfileText, updateRoleProfileText  } from "../../Redux/profile-reducer";


class UserProfile extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.onRoleProfileChanging = this.onRoleProfileChanging.bind(this);
    // }



    newFIO = React.createRef();
    newPhone = React.createRef();
    newEmail = React.createRef();
    newAddress = React.createRef();
    newRole = React.createRef();

    onFIOProfileChanging = () => {
        let text = this.newFIO.current.value;
        this.props.updateFIOProfileText(text);
    }

    onPhoneProfileChanging = () => {
        let text = this.newPhone.current.value;
        this.props.updatePhoneProfileText(text);
    }

    onEmailProfileChanging = () => {
        let text = this.newEmail.current.value;
        this.props.updateEmailProfileText(text);
    }

    onAddressProfileChanging = () => {
        let text = this.newAddress.current.value;
        this.props.updateAddressProfileText(text);
    }

    onRoleProfileChanging = () => {
        let text = this.newRole.current.value;
        this.props.updateRoleProfileText(text);
    }



    render() {



        return <div className="admin_dashboard">
            <div className="dash__header">
                <h4 className="headerM">Редактирование клиента</h4>
            </div>
            <div className="mainblock">
                <div className={cl.profileTable}>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>ID</span></div>
                        <div className={cl.desc}><span>{this.props.userData.customerId}</span></div>
                    </div>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>Дата регистрации</span></div>
                        <div className={cl.desc}><span>{this.props.userData.regDate}</span></div>
                    </div>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>ФИО</span></div>
                        <div className={cl.desc}><input className="loginfield" ref={this.newFIO} onChange={this.onFIOProfileChanging} type="search" value={this.props.userData.name} /></div>
                    </div>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>Телефон</span></div>
                        <div className={cl.desc}><input placeholder="+79213456734" ref={this.newPhone} onChange={this.onPhoneProfileChanging} className="loginfield" type="search" value={this.props.userData.phone} /></div>
                    </div>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>Email</span></div>
                        <div className={cl.desc}><input placeholder="rt@mail.ru" ref={this.newEmail} onChange={this.onEmailProfileChanging} className="loginfield" type="search" value={this.props.userData.email} /></div>
                    </div>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>Адрес</span></div>
                        <div className={cl.desc}><input placeholder="Володарского 22-73" ref={this.newAddress} onChange={this.onAddressProfileChanging} className="loginfield" type="search" value={this.props.userData.address} /></div>
                    </div>
                    <div className={cl.profileTableRow}>
                        <div className={cl.item}><span>Роль</span></div>
                        <div className={cl.desc}><input placeholder="User" ref={this.newRole} onChange={this.onRoleProfileChanging} className="loginfield" type="search" value={this.props.userData.role} /></div>
                    </div>
                    <button className={cl.btn} type="submit">Сохранить</button>
                </div>
            </div>
        </div>

    }
}



export default UserProfile