import logo from './logo.svg';
import './App.css';
import Partslist from './Dashboard/PartsList/PartsList';
import { NavLink, Route } from 'react-router-dom';
import UserslistContainer from './Dashboard/UsersList/UsersListContainer';
import UserProfileContainer from './Dashboard/UserProfile/UserProfileContainer';
import store from './Redux/redux-store';
import AdminDashBoard from './Dashboard/AdminDashBoard/AdminDashBoard';
import Main from './MainSite/Main';
import Login from './MainSite/Login/Login';
import Registration from './MainSite/Registration/Registration';
import { useState } from 'react';


// const App = () => {
//   return (
//     <div className="wrapper">
//       <div className="admin_container">
//         <Menu />
//         <Route path='/Userslist' render={ () => <UserslistContainer 
//                                                           //clients={props.state.userslist.clients}
//                                                           // searchText={props.searchText}
//                                                           //newSearchText={props.state.userslist.newSearchText}
//                                                           //dispatch={props.dispatch}
//                                                           //store = {props.store}
//                                                           />}/>
//         <Route path='/Partslist' component={Partslist}/>
//         <Route path='/UserProfile/:id' render={ () => <UserProfileContainer />}/>
//       </div>
//     </div>
//   );
// }

const App = () => {

  //const[modalActive, setModalActive] = useState(true);

  return (

    <div className="wrapper">
      <Route exact path='/' render={ () => <Main />}/>
      <Route exact path='/login' render={ () => <Login />}/>
      <Route exact path='/registration' render={ () => <Registration />}/>


      <Route path='/admin' render={ () => <AdminDashBoard />}/>


      {/* <div className="admin_container">
        <Menu />
        <Route path='/Userslist' render={ () => <UserslistContainer 
                                                          //clients={props.state.userslist.clients}
                                                          // searchText={props.searchText}
                                                          //newSearchText={props.state.userslist.newSearchText}
                                                          //dispatch={props.dispatch}
                                                          //store = {props.store}
                                                          />}/>
        <Route path='/Partslist' component={Partslist}/>
        <Route path='/UserProfile/:id' render={ () => <UserProfileContainer />}/>
      </div> */}
      {/* <button className='open-btn' onClick={() => setModalActive(true)}>Открыть окно</button> */}
      {/* <Login active={modalActive} setActive={setModalActive}/> */}
    </div>
  );
}


// const Menu = () => {
//   return (
//     <div className="admin_menu">
//       <div className="user_frame">
//         <span className="user_info">
//           <span className="login">login@mail.ru</span>
//           <span className="role">Administrator</span>
//         </span>

//       </div>
//       <div className="main_menu">
//         <ul className="menu">
//           <li className="menu__item">
//             <NavLink to='/Userslist'>Клиенты</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/Partslist'>Заказы</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/#'>Отчет по клиентам</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/#'>Отчет по заказам</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/#'>Отчет по артикулам</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/#'>Отчет по корзинам</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/#'>Отчет по запросам</NavLink>
//           </li>
//           <li className="menu__item">
//             <NavLink to='/#'>Загрузка прайсов</NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


export default App;
