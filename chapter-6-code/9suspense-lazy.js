// App.jsx
import { Suspense } from "react"
import Child from "./Child"

const App = () => {
    return (
        <>
            <h1>レシピ</h1>
            <Suspense fallback={<p>ローディング</p>}>
                <Child />
            </Suspense>
        </>
    )
}

export default App


// Child.jsx
import { useState, useEffect} from "react"

const Child = () => {
    const [mealData, setMealData] = useState({
        instructions: "",
    })

    const getMealData = async() => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=sushi")
        const jsonData = await response.json()
        setMealData({
            instructions: jsonData.meals[0].strInstructions,
        })
    } 

    useEffect(() => {
        getMealData()
    }, [])

    return (
        <p>{mealData.instructions}</p>
    )
}

export default Child