import React from 'react';

function Color (props) {
    return (
        <div>

            <h1>Question: Guess the color name?</h1>
            <h3> Answer: This color is {props.colorName}. </h3>
         
            <hr/>
        </div>
        
    );
       
    
}
export default Color;