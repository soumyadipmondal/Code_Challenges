import React from 'react';
import { render } from 'react-dom';
import "./styles.css";

const About = () => {
    return(
        <div>
            <h1>About React !!</h1>
        </div>   
    )
    
}

render(
    <About />,
    document.getElementById('target')
)