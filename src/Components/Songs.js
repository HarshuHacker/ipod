import React from 'react';
import "../Assets/CSS/Song.css"

// Renders songs menu
class Songs extends React.Component {
    render() {
        const {songItems,active} = this.props;
        return (
            <div id='song-menu'>
                <h2>Songs</h2>
                <ul>
                {songItems.map((element, index)=>
                {
                    return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                })}
                </ul>
            </div>

        )
    }

}


export default Songs;