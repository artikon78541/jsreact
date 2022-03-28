import React from "react";
import { NavLink } from "react-router-dom";


// let clientsElements = [];
// if (props.clients.length !== 0) {
//   clientsElements = props.clients.map(c => <ClientItem num={c.customerId} id={c.customerId} number={c.customerId} email={c.email} name={c.name} phone={c.phone} regDate={c.regDate} role={c.role} />);
// }

const ClientItem = (c) => {
    return (
        <tr key={c.id}>
            <td>{c.num}</td>
            <td>{c.id}</td>
            <td>{c.number}</td>
            <td>{c.email}</td>
            <td>{c.name}</td>
            <td>{c.phone}</td>
            <th>{c.regDate}</th>
            <td>{c.role}</td>

            <td align="center">
                <div className="user_update" key={c.id}>
                    <NavLink type="submit" to={'/admin/UserProfile/' + c.id}>
                        Изменить
                    </NavLink>
                </div>

            </td>
        </tr>
    )
}


export default ClientItem
//сlassName="user_upd_btn" 