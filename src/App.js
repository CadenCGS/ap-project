import './App.css';
import React from 'react'
import PopBar from './Components/PopBar.js'
import MainApp from './Components/MainApp.js'

function App() {
    
    return (
    <div className="App">
    <p className="titletext" id="mainTitle">Cryptocurrency Calculator</p>
    <p id="subTitle">Popular Currencies</p>

    <PopBar />

    <p className="titletext" id="calcTitle">Current Ownings Calculator</p>

    <MainApp />
    </div>
);
}

export default App;
