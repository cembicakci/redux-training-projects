import { createSlice } from "@reduxjs/toolkit";

//createSlice oluşturulur ve name, initialState, reducers tanımlanır.
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    }, 
    //bir veriyi manipüle etmek için reducers içine bütün fonksiyonlar yazılır
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount:(state, action) => {
            state.value += Number(action.payload); //input da yazılan değer action.payload dan çekiliyor
        }
    }
})

//reducer de tanımlanan fonksiyonlar dışa aktarılır.
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;