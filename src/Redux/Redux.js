const redux = require("redux");
const createStore   = redux.createStore;

//actionTypes 
const ADD = 'ADD'
const REMOVE = 'REMOVE'
//action
// const Action = {
//     return:{
//         type: ACTION,
//         payload: 'This is a payload'
//     }
// }
const ADD_BOOK = {
  return: {
    type: ADD,
    payload: 10,
  },
};
const REMOVE_BOOK = {
  return: {
    type: REMOVE,
    payload: 5,
  },
};
const initialState = {
    books: 15,
    pens: 10
}
console.log(initialState);
// the reducers
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD:
            return{
                ...state,
                books: state.books + action.payload
            }
        case REMOVE:
            return {
                ...state,
                  books:Math.max(0,state.books - action.payload)  
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.dispatch(ADD_BOOK);
console.log(initialState, store.getState());

