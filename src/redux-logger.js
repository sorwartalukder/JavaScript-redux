//redux import
const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// product

// product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';


// Product state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2
};


// product action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}


// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:

            return {
                ...state
            };
        case ADD_PRODUCT:

            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };

        default:
            return state;
    }
}


// Store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProducts('pen'))