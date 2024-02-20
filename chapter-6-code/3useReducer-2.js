// App.jsx
import { useReducer } from "react" 

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case "plus":
            return state + 1 
        case "minus":
            return state - 1 
        case "reset":   
            return state = 0  
        default:
            return state
    }
}

const App = () => {
    const [currentState, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>カウント：{currentState}</p>
            <button onClick={() => dispatch({type: "plus"})}>プラス</button>
            <button onClick={() => dispatch({type: "minus"})}>マイナス</button>
            <button onClick={() => dispatch({type: "reset"})}>リセット</button>
        </>
    )
}

export default App