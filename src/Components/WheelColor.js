import React from 'react';
import "../Assets/CSS/Themes.css"

// Render wheel color change menu
class WheelColor extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="theme">
                <h2>Wheel Color Select</h2>
                <ul>
                    {["White","Black","Yellow","Orange"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}


export default WheelColor;