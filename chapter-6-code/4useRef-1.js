// App.jsx
import { useState } from "react"

const App = () => {
    const [state, setState] = useState("初期状態")

    const handleStateChange = () => {
        setState("変更後")
    }

    console.log("レンダリング")

    return (
        <div>
            <button onClick={handleStateChange}>State変更</button>
            <p>State: {state}</p>
        </div>
    )
}

export default App