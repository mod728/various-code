// App.jsx
import { useState } from "react"

const App = () => {
    const [countPlus, setCountPlus] = useState(0)

    const handleCountPlus = () => {
        setCountPlus(countPlus => countPlus + 1)
    }

    return (
        <div>            
            <h1>カウンター</h1>
            <button onClick={handleCountPlus}>プラス</button>
            {countPlus}
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