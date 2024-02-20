// App.jsx
import { useState, useCallback } from "react"
import Child from "./Child" 

const App = () => {
    const [countPlus, setCountPlus] = useState(0)
    const [countMinus, setCountMinus] = useState(0) 

    const handleCountPlus = useCallback(() => {
        setCountPlus(countPlus => countPlus + 1)
    }, [])   

    const handleCountMinus = useCallback(() => { 
        setCountMinus(countMinus => countMinus - 1)
    }, []) 

    return (
        <div>            
            <h1>カウンター</h1>
            <Child countPlus={countPlus} 
                   handleCountPlus={handleCountPlus}
                   handleCountMinus={handleCountMinus}       
            /> 
            {countMinus} 
        </div>
    )
}

export default App


// Child.jsx
import { memo } from "react"

const Child = memo((props) => {
    console.log("レンダリング")
    return (
        <>
            <button onClick={props.handleCountPlus}>プラス</button> 
            <button onClick={props.handleCountMinus}>マイナス</button>
            {props.countPlus}
        </>
    )
})

export default Child