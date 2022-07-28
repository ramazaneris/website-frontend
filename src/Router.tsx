import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Preview from './pages/Preview'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/u/:id" element={<Preview />} />
            </Routes>
        </BrowserRouter>
    )
}
