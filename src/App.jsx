import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav';
import Scroll  from './components/scrollimage';
import Cards from "./components/Cards";
import CommandBox from './components/commandBox';
const App=()=>
{
    return(
        <>
        <NavBar/>
        <Scroll/>
        <Cards/>
        <CommandBox/>
        </>
    )
}
export default App;
