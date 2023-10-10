const { createStore } = require('redux');

const INCREMENT = 'INCREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// state
const initialCounterState = {
    count: 0,
};

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

const resetCounterAction = () => {
    return {
        type: RESET,
    }
}

const counterReducer = (state = initialCounterState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }
        default:
            state
    }

}

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(resetCounterAction())
// store.dispatch(decrementCounter())
store.dispatch(incrementCounterByValue(5))