import React from 'react';
import "../Assets/CSS/lockScreen.css"

// Renderse lockscreen
class LockScreen extends React.Component {
    render() {
        return (
            <div>
                <div className="lock-display">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div className="bottom-div-lock">
                    <h3>Press Centre Button To Unlock !!</h3>
                </div>
            </div>
        )
    }

}


export default LockScreen;