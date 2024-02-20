// App.jsx
import { useState } from "react"

const App = () => {
    const [name, setName] = useState("")
    const [words, setWords] = useState([]) 

    const handleChange = (e) => {
        setName(e.target.value)

        const data = []
        for(let i = 0; i < 30000; i++){
            data.push(e.target.value)
        }
        setWords(data)
    }

    return (
        <div>
            <input value={name} onChange={handleChange}/>
            {words.map((word, index) => 
                <p key={index}>{word}</p>
            )}
        </div>
    )
}

export default App