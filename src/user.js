const { createStore } = require('redux');

const ADD_USER = 'ADD_USER';

// state
const initialUser = {
    users: ['sorwar'],
    count: 1
};

const addUser = (user) => {
    return {
        type: ADD_USER,
        playload: user,
    };
};



const userReducer = (state = initialUser, action) => {

    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.playload],
                count: state.count + 1,
            }
        default:
            state
    }

}

const store = createStore(userReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('newaz'))
store.dispatch(addUser('rakib'))