import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


// let rerenderEntireTree = () =>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <App clients={state.clients} searchText = {searchText} newSearchText = {state.newSearchText}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// let rerenderEntireTree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
       <Provider store={store}>
        <App 
        //state={state} dispatch={store.dispatch.bind(store)} store = {store}
        />
       </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() =>{
//   let state = store.getState();
//   rerenderEntireTree(state);
  
// });

// rerenderEntireTree();

// store.subscribe(() => {
//   rerenderEntireTree();
  
// });


// ReactDOM.render(
//   <React.StrictMode>
//     <App clients={state.clients} searchText = {searchText} newSearchText = {state.newSearchText}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
