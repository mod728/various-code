import Recipe from "../components/Recipe"

const Meal = (props) => {
    return (
        <>
            <Recipe mealData={props.mealData}/> 
        </>
    )
}

export default Meal