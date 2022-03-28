import React from "react";
import { NavLink, Route } from 'react-router-dom';
import UserProfileContainer from "../UserProfile/UserProfileContainer";
import UserslistContainer from "../UsersList/UsersListContainer";
import Partslist from "../PartsList/PartsList";


const AdminDashBoard = () => {

  return (

    <div className="admin_container">
      <Menu />
      <Route path='/admin/Userslist' render={ () => <UserslistContainer />}/>
      <Route path='/Partslist' component={Partslist}/>
      <Route path='/admin/UserProfile/:id' render={ () => <UserProfileContainer />}/>
    </div>

  );
}

const Menu = () => {
    return (
      <div className="admin_menu">
        <div className="user_frame">
          <span className="user_info">
            <span className="login">login@mail.ru</span>
            <span className="role">Administrator</span>
          </span>
  
        </div>
        <div className="main_menu">
          <ul className="menu">
            <li className="menu__item">
              <NavLink to='/admin/Userslist'>Клиенты</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/admin/Partslist'>Заказы</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/#'>Отчет по клиентам</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/#'>Отчет по заказам</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/#'>Отчет по артикулам</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/#'>Отчет по корзинам</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/#'>Отчет по запросам</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to='/#'>Загрузка прайсов</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }


export default AdminDashBoard