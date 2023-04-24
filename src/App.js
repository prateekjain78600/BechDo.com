import React from 'react'
import SignUp from './components/SignUp'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function App() {
  return (
   <Routes>
    <Route path='/'>
        <Route index element={<SignUp/>} />
    </Route>
   </Routes>
  )}