import React from 'react';
import { render } from 'react-dom';
import "./styles.css";

const Greeting = () => {
    return(
        <div>
            <h1>Hello React !!</h1>
            <div class="image"></div>
        </div>   
    )
    
}

render(
    <Greeting />,
    document.getElementById('target')
)