// App.jsx
import { useState } from "react"

const App = () => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

  return (
    <div>
        <input value={name} onChange={handleChange}/>
        {name}
    </div>
  )
}

export default App