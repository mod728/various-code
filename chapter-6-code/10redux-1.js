// App.jsx
import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(count => count + 1)
    }

    return (
        <>
            <p>カウント：{count}</p>
            <button onClick={handlePlus}>プラス</button>
        </>
    )
}

export default App