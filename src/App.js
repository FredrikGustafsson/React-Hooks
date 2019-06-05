import React from 'react';
import './App.css';
import StateHook from './StateHook';
import EffectHook from './EffectHook';
import BeforeStateHook from './BeforeStateHook';
import BeforeEffectHook from './BeforeEffectHook';


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

            <h3>Before State Hook </h3>
            <div style={divStyle}>
                <BeforeStateHook/>
            </div>
            <h3>With State Hook</h3>
            <div style={divStyle}>
                <StateHook/>
            </div>
            <h3>Before Effect Hook</h3>
            <div style={divStyle}>
                <BeforeEffectHook/>
            </div>
            <h3>with Effect Hook</h3>
            <div style={divStyle}>
                <EffectHook/>
            </div>
        </div>
    )
        ;
}

export default App;
