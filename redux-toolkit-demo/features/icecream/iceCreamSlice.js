const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numoficecream: 20
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState, 
    reducers: {
        ordered: (state) => {
            state.numoficecream--
        },
        restocked: (state, action) => {
            state.numoficecream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numoficecream--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
