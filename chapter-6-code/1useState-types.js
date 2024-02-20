// 1. 現在のstateをベースに更新する場合
import { useState } from "react"
import { useState } from "react"

const App = () => {
    const [name, setName] = useState("谷崎")

    const handleChange = () => {
        setName(prevState => prevState + "さん")
    }

    return (
        <button onClick={handleChange}>
            {name}
        </button>
    )
}

export default App



// 2. 配列のstateを更新する場合
import { useState } from "react"

const App = () => {
    const [name, setName] = useState([
        {country: "イギリス", capital: "ロンドン"}
      ])

    const handleChange = () => {
      setName([
          ...name,
          {county: "日本", capital: "東京"}
      ])
    }

    {console.log({name})}

    return (
        <button onClick={handleChange}>
          ボタン
        </button>
    )
}

export default App


/// 3. 複数の項目を持つオブジェクトのstateを更新する場合
import { useState } from "react"

const App = () => {
    const [data, setData] = useState({
          country: "", 
          capital: ""
        })

    const handleChange = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      })
    }

    {console.log(data)}

    return (    
      <>
          <input value={data.country} 
                 onChange={handleChange} 
                 type="text"
                 name="country"
          />
          <input value={data.capital} 
                 onChange={handleChange} 
                 type="text"
                 name="capital"
          />
      </> 
    )
}

export default App