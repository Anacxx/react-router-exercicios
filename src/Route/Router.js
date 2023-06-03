import { BrowserRouter,Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import { Prod } from "../pages/Prod"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path= "/product/:id" element= {<Prod/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}