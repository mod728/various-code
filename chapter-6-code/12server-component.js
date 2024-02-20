// page.js (Next.js)
const App = async() => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=sushi")
    const jsonData = await response.json()
    return (
        <>
            <h1>こんにちは</h1>
            <p>{jsonData.meals[0].strInstructions}</p>
        </>
    )
}

export default App