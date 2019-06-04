import React from 'react';
import './App.css';
import StateHook from './StateHook';
import EffectHook from './EffectHook';


const divStyle = {
    width: '300px',
    height: '200px',
    justifyContent: 'center',
    border: '5px solid black',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
};

function App() {
    return (
        <div className="App">
            <h1>React Hooks test</h1>

            <h3>State Hook</h3>
            <div style={divStyle}>
                <StateHook/>
            </div>
            <h3>Effect Hook</h3>
            <div style={divStyle}>
                <EffectHook/>
            </div>
        </div>
    )
        ;
}

export default App;
