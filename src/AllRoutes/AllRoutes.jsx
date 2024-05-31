import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Success from '../Pages/Success'


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/success' element={<Success />} />
               
            </Routes>
        </>
    )
}

export default AllRoutes