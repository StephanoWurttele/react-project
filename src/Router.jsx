import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import {About} from "./views/About"
import {Error} from "./views/Error"
import {LandingPage} from "./views/LandingPage"
import {User} from "./views/User"
import { NavBar } from './components/NavBar'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
                <Route path="/error" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
