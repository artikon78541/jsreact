import React from "react";

const App = () => {
    return (
        <div className="admin_dashboard">
            <div className="dash__header">
                <h4 className="headerM">Information</h4>
                <div className="input_loginfield">
                    <input name="search" placeholder="Введите логин клиента..." className="loginfield" type="search" />
                    <label for="dateInput" style="font-size: 14px;">Дата регистрации: </label>
                    <input name="DateFrom" placeholder="" className="dateInput" type="date" />
                    <input name="DateTo" placeholder="" className="dateInput" type="date" />
                    <button className="btn" type="submit">Поиск</button>
                </div>
                <button className="btn" type="submit">Выгрузка</button>
            </div>

            <div className="mainblock">
                <div className="user_list">
                    <table className="user_table">
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Код</th>
                                <th>Номер</th>
                                <th>Логин</th>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Дата регистрации</th>
                                <th>Роль</th>
                                <th align="center">Изменить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>sdfkndnkjdfkjnj</td>
                                <td>10</td>
                                <td>gvkbm @ghvj.sdf</td>
                                <td>Иванов Иван Иванович</td>
                                <td>87665678696</td>
                                <th>13.06.2021</th>
                                <td>User</td>

                                <td align="center">
                                    <div className="user_update">
                                        <a className="user_upd_btn" type="submit" asp-controller="#" asp-action="#"
                                            asp-route-partId="@p.PartId">Изменить</a>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>sdfkndnkjdfkjnj</td>
                                <td>10</td>
                                <td>gvkbm @ghvj.sdf</td>
                                <td>Иванов Иван Иванович</td>
                                <td>87665678696</td>
                                <th>13.06.2021</th>
                                <td>User</td>

                                <td align="center">
                                    <div className="user_update">
                                        <a className="user_upd_btn" type="submit" asp-controller="#" asp-action="#"
                                            asp-route-partId="@p.PartId">Изменить</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}