// App.jsx
import { useSelector, useDispatch } from "react-redux" 
import { plus, minus, reset } from "./redux/counterSlice"  

const App = () => {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()  

    return (
        <>
            <p>カウント：{count}</p>
            <button onClick={() => dispatch(plus())}>プラス</button>
            <button onClick={() => dispatch(minus())}>マイナス</button>
            <button onClick={() => dispatch(reset())}>リセット</button>
        </>
    )
}

export default App


// store.js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"  

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export default store


// counterSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = 0

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        plus: (state) => state + 1,
        minus: (state) => state - 1,
        reset: (state) => state = 0,
    }
})

export const { plus, minus, reset } = counterSlice.actions
export default counterSlice.reducer   