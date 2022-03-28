// import userslistReducer from "./userslist-reducer";

// //const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT'

// let store = {
//     _state: {
//         clients: [
//             { num: 1, id: 'tdvdcvhdjjubj', number: 10, email: 'dtr@MediaList.ru', name: 'Иванов Иван Иванович', phone: '89219233456', regDate: '14.03.2021', role: 'user' },
//             { num: 2, id: 'rtbvgrfbfbgbd', number: 11, email: 'dfdgfdf@Mail.ru', name: 'Петров Василий Александрович', phone: '89113457643', regDate: '15.03.2021', role: 'user' },
//             { num: 3, id: 'dfdfdfdfdfdfd', number: 12, email: 'fg@gmail.ru', name: 'Сидоров Дмитрий Сергеевич', phone: '89057863412', regDate: '16.03.2021', role: 'user' }
//         ],
//         newSearchText: ''
//     },

//     getState() {
//         return this._state;
//     },

//     _callSubscriber() {
//         console.log('State changed');
//     },

//     searchData: [],

//     searchText(textInp) {
//         this.searchData.push(textInp)
//     },

//     // updateSearchText (textInp) {
//     //     this._state.newSearchText = textInp;
//     //     this._callSubscriber(this._state);
//     // },

//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },



//     dispatch(action) {

//         userslistReducer(this._state, action);
//         this._callSubscriber(this._state);
//     }





// }




// window.store = store;

// export default store;