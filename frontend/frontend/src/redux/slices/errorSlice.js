import { createSlice } from '@reduxjs/toolkit'

const initialState = '' // для записи ошибки можно использовать массив [] в таком случае все ошибки будут сохранены в данный массив

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            return action.payload
        },
        clearError: () => {
            return initialState
        }
    }
})

export const { setError, clearError } = errorSlice.actions

export const selectErrorMassage = (state) => state.error

export default errorSlice.reducer