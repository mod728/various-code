import { useContext } from "react"  
import { AppContext } from "../context"  
import Button from "./Button" 

const Form = () => {
    const contextValues = useContext(AppContext)  
    return(
        <form onSubmit={contextValues.getMealData}>
             <input onChange={(e) => contextValues.setMealName(e.target.value)}
                   type="text" 
                   name="mealName" 
                   placeholder="料理名を英語で入力"
                   value={contextValues.mealName}
            />
            <Button type="search"/> 
        </form>
    )
}

export default Form