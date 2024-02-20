import { Outlet } from "react-router-dom" 
import Header from "../components/Header"
import Form from "../components/Form"

const Layout = (props) => { 
    return (
        <div className="mode-body">
            <div className="container">
                <Header/>
                <Form setMealName={props.setMealName} 
                      getMealData={props.getMealData}
                />
                <Outlet/> 
            </div>
        </div>
    )
}

export default Layout