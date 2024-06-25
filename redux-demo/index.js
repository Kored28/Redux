const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// Actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake() {
    return{
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream(){
    return{
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function restockIceCream(qty = 1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceState = {
    numOfIceCreams: 20,
}

// reducer

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            }
        default:
            return state
    }
}

// Redux store
const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

const store = createStore(rootReducers, applyMiddleware(logger))
console.log('initial State', store.getState())

const unsubscribe = store.subscribe(() => {})


const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)
actions.orderIceCream()
actions.restockIceCream(8)

unsubscribe()