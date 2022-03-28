
const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const UPDATE_DATE_TO_TEXT = 'UPDATE-DATE-TO-TEXT';
const UPDATE_DATE_FROM_TEXT = 'UPDATE-DATE-FROM-TEXT';
const SEARCH_CUSTOMERS = 'SEARCH_CUSTOMERS';

let initialState ={
    clients: [
        
        // { num: 1, id: 'tdvdcvhdjjubj', number: 10, email: 'dtr@MediaList.ru', name: 'Иванов Иван Иванович', phone: '89219233456', regDate: '14.03.2021', role: 'user' },
        // { num: 2, id: 'rtbvgrfbfbgbd', number: 11, email: 'dfdgfdf@Mail.ru', name: 'Петров Василий Александрович', phone: '89113457643', regDate: '15.03.2021', role: 'user' },
        // { num: 3, id: 'dfdfdfdfdfdfd', number: 12, email: 'fg@gmail.ru', name: 'Сидоров Дмитрий Сергеевич', phone: '89057863412', regDate: '16.03.2021', role: 'user' }
    ],
    newSearchText: '',
    newDateFrom: '',
    newDateTo: ''
}

const userslistReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_TEXT:{

            let stateCopy = {...state};
            stateCopy.newSearchText = action.textInp;
            return stateCopy;
        }
        case UPDATE_DATE_FROM_TEXT:{

            let stateCopy = {...state};
            stateCopy.newDateFrom = action.textInp;
            return stateCopy;
        }
        case UPDATE_DATE_TO_TEXT:{

            let stateCopy = {...state};
            stateCopy.newDateTo = action.textInp;
            return stateCopy;
        }
        case SEARCH_CUSTOMERS:{

            //let stateCopy = {...state, clients: [...action.clients]};
            let stateCopy = {...state};
            stateCopy.clients = action.clients;

            stateCopy.newSearchText = '';
            stateCopy.newDateTo = '';
            stateCopy.newDateFrom = '';
            return stateCopy;
        }


        default:
            return state;
    }
}

export const updateSearchText = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        textInp: text
    }
}

export const updateDateFrom = (text) => {
    return {
        type: UPDATE_DATE_FROM_TEXT,
        textInp: text
    }
}

export const updateDateTo = (text) => {
    return {
        type: UPDATE_DATE_TO_TEXT,
        textInp: text
    }
}

export const searchCustomers = (clients) => {
    return {
        type: SEARCH_CUSTOMERS,
        clients: clients
    }
}



export default userslistReducer;