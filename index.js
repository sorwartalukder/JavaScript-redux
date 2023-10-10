const { createStore, applyMiddleware } = require('redux');
// another way  
// const { default: axios } = require('axios'); 
// const { default: thunk } = require('redux-thunk');
const axios = require('axios').default;
const thunk = require('redux-thunk').default;


// async actions -api calling
// api url -https://jsonplaceholder.typicode.com/todos
// middleware -redux-thunk
// axios api


// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

// states
const initialTodoState = {
    todos: [],
    isLoading: false,
    error: null
};

// actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    }
}

// reducer
const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

// async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then(res => {
                const todosTitles = res.data.map(todo => todo.title)
                dispatch(getTodosSuccess(todosTitles));
            })
            .catch(error => {
                dispatch(getTodosFailed(error.message));
            })
    }
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
// console.log(store)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())