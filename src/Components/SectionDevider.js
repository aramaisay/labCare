import React from 'react';

// Css
import '../Css/Components/SectionDevider.css'

const SectionDevider = ({text, color}) => {
    return (
        <div className = 'cont' >
            <div className = {`text ${color}`} > {text} </div>
            <div className = 'devider' ></div>
        </div>
    )
}

export default SectionDevider;