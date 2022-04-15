import React from 'react';
import "../Assets/CSS/Themes.css"

// Renders themes menu
class Themes extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="theme">
                <h2>Theme Select</h2>
                <ul>
                    {["Blue","Green","Rose Gold","Space Gray"].map((element,index)=>
                    {
                        return active===index?
                        <li key={index} className="active theme-li">{element}</li>:
                        <li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}


export default Themes;