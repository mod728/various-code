// App.jsx
import { useState, useEffect } from "react"

const App = () => {
    const [color, setColor] = useState("blue") 

    useEffect(() => {                   
        setColor("red")                  
    }, [])  

    return (
        <div style={{backgroundColor: color}}>背景色</div>
    )
}

export default App