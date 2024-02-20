// App.jsx
import { useRef } from "react"

const App = () => {
    const divRef = useRef(null)

    console.log(divRef)

    return (
        <div ref={divRef}>
            <h1>こんにちは</h1>
        </div>
    )
}

export default App