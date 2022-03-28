import React from "react";
import axios from 'axios';
import ClientItem from "./UserComponent";



// const ClientItem = (props) => {
//   return (
//     <tr>
//       <td>{props.num}</td>
//       <td>{props.id}</td>
//       <td>{props.number}</td>
//       <td>{props.email}</td>
//       <td>{props.name}</td>
//       <td>{props.phone}</td>
//       <th>{props.regDate}</th>
//       <td>{props.role}</td>

//       <td align="center">
//         <div className="user_update">
//           <a className="user_upd_btn" type="submit" asp-controller="#" asp-action="#"
//             asp-route-partId="@p.PartId">Изменить</a>
//         </div>

//       </td>
//     </tr>
//   )
// }

// let newSearchByName = React.createRef();
// let SearchToServer = () =>{
//   let text = newSearchByName.current.value;

// }

const Userslist = (props) => {
  let newSearchByName = React.createRef();
  let newDateFrom = React.createRef();
  let newDateTo = React.createRef();

  let SearchToServer = () => {

      var url = new URL('https://localhost:5001/api/Customer/');
      url = url + '?' + new URLSearchParams({
        search: props.newSearchText,
        dateFrom: props.newDateFrom,
        dateTo: props.newDateTo
      })
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
        
      };
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => props.searchCustomers(result))
        .catch(error => console.log('error', error));


  }

  // debugger;
  //   var axios = require('axios');

  //   var config = {
  //     method: 'get',
  //     url: 'https://localhost:5001/api/Customer',
  //     headers: { }
  //   };

  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });


  // axios(config)
  // .then(function (response) {
  //   let clients = response.data;
  //   props.setUsers(clients);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // debugger;



  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  // fetch("https://localhost:5001/api/Customer", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  // //____________________________________________

  let clientsElements = [];
  if (props.clients.length !== 0) {
    clientsElements = props.clients.map(c => <ClientItem num={c.customerId} id={c.customerId} number={c.customerId} email={c.email} name={c.name} phone={c.phone} regDate={c.regDate} role={c.role} />);
  }

  //let clientsElements = props.clients.map(c => <ClientItem num={c.num} id={c.id} number={c.number} email={c.email} name={c.name} phone={c.phone} regDate={c.regDate} role={c.role} />);



  let onTextChanging = () => {
    debugger;
    let text = newSearchByName.current.value;
    props.updateSearchText(text);
  }


  let onDateFromChanging = () => {
    let text = newDateFrom.current.value;
    props.updateDateFrom(text);
  }

  let onDateToChanging = () => {
    let text = newDateTo.current.value;
    props.updateDateTo(text);
  }

  let newDateFromValue = props.newDateFrom;
  let newDateToValue = props.newDateTo;
  let newT = props.newSearchText;

  return (
    <div className="admin_dashboard">
      <div className="dash__header">
        <h4 className="headerM">Information</h4>
        <div className="input_loginfield">
          <input name="search" placeholder="Введите логин клиента..." className="loginfield" type="search" ref={newSearchByName} onChange={onTextChanging}
            value={newT}
          />
          <label htmlFor="dateInput">Дата регистрации: </label>
          <input name="DateFrom" placeholder="" className="dateInput" type="date" ref={newDateFrom} onChange={onDateFromChanging} value={newDateFromValue} />
          <input name="DateTo" placeholder="" className="dateInput" type="date" ref={newDateTo} onChange={onDateToChanging} value={newDateToValue} />
          <button className="btn" type="submit" onClick={SearchToServer}>Поиск</button>
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
              {clientsElements}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}


export default Userslist