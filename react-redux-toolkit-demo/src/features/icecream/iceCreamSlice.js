import { ordered as cakeOrdered } from '../cake/cakeSlice'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    numOfIcecreams: 20
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState, 
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreams--
        })
    }
})

export const { ordered, restocked } = iceCreamSlice.actions

export default iceCreamSlice.reducer

