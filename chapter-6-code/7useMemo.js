// App.jsx
import { useState } from "react"
import Child from "./Child"

const App = () => {
    const [countPlus, setCountPlus] = useState(0)
    const [countMinus, setCountMinus] = useState(0)

    const handleCountPlus = () => {
        setCountPlus(countPlus => countPlus + 1)
    }

    const handleCountMinus = () => {
        setCountMinus(countMinus => countMinus - 1)
    }

    return (
        <div>            
            <h1>カウンター</h1>
            <button onClick={handleCountPlus}>プラス</button>
            <button onClick={handleCountMinus}>マイナス</button> 
            <Child countPlus={countPlus}/>
            {countMinus}
        </div>
    )
}

export default App


// Child.jsx
const Child = (props) => {
    console.log("レンダリング")
    return (
        <>
            {props.countPlus}
        </>
    )
}

export default Child