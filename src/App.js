import React, {useState} from 'react'

import './styles/css/style.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/header";
import Lab1 from "./components/lab_1/lab1";
import Lab2 from "./components/lab_2/lab2";
import Lab3 from "./components/lab_3/lab3";
import Lab4 from "./components/lab_4/lab4";
import Lab5 from "./components/lab_5/lab5";
import Lab6 from "./components/lab_6/lab6";
import Lab7 from "./components/lab_7/lab7";
import Lab8 from "./components/lab_8/lab8";
import Lab9 from "./components/lab_9/lab9";


const App = () => {

    return (
        <div>

            <BrowserRouter>
                <Header/>
                <Route path='/' exact render={() => <Lab1/>} />
                <Route path='/lab1' render={() => <Lab1/>} />
                <Route path='/lab2' render={() => <Lab2/>} />
                <Route path='/lab3' render={() => <Lab3/>} />
                <Route path='/lab4' render={() => <Lab4/>} />
                <Route path='/lab5' render={() => <Lab5/>} />
                <Route path='/lab6' render={() => <Lab6/>} />
                <Route path='/lab7' render={() => <Lab7/>} />
                <Route path='/lab8' render={() => <Lab8/>} />
                <Route path='/lab9' render={() => <Lab9/>} />

            </BrowserRouter>
        </div>
    )
}

export default App