import React from "react";
import cl from './Login.module.css';
import { NavLink } from "react-router-dom";


const Login = ({ active, setActive }) => {
  return (
    <div className={active ? cl.loginwindowact: cl.loginwindow} onClick={() => setActive(false)}>
      <div className={cl.loginform} onClick={e => e.stopPropagation()}>
        <h2>Авторизация</h2>
        <form action="#">
          <input type="text" placeholder="email" className={cl.input}></input>
          <input type="password" placeholder="password" className={cl.input}></input>

          <input type="submit" value="Войти" className={cl.inputBtn}></input>

        </form>

        <div className={cl.line1}>
          <NavLink type="submit" to={'/Registration/'} className={cl.linktext}>
            Регистрация
          </NavLink>
          <NavLink type="submit" to={'/Registration/'} className={cl.linktext} >
            Забыли пароль?
          </NavLink>
        </div>
      </div>
    </div>


  )
}

export default Login