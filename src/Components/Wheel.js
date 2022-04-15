import React from "react";
import "../Assets/CSS/Wheel.css"
import ZingTouch from 'zingtouch';

class Wheel extends React.Component {
    constructor() {
        super();
        this.angle = 0;
    }

    render()
    {
        const { changeMenuForward, active, currentMenu, theme, wheelColor } = this.props;
        let buttonColor = "black";
        if(wheelColor === "black" || wheelColor === "orange")
        {
            buttonColor= "white"
        }
        else
        {
            buttonColor= "black"
        }
        return(
            <div className="wheel-container" id="wheel-container">
                <div style={{backgroundColor:wheelColor}} className="wheel" id="wheel">

                    <div className="controls" id="menu-button">
                        <i className="fa-solid fa-bars" style={{color:buttonColor}} ></i>
                    </div>

                    <div className="controls" id="forward-button">
                        <i className="fa-solid fa-forward" style={{color:buttonColor}}></i>
                    </div>

                    <div className="controls" id="backward-button">
                        <i className="fa-solid fa-backward" style={{color:buttonColor}}></i>
                    </div>

                    <div className="controls" id="play-pause-button">
                        <i className="fa-solid fa-play" style={{color:buttonColor}}></i>
                        <i className="fa-solid fa-pause" style={{color:buttonColor}}></i>
                    </div>

                </div>
                <div id="select-button" style={{background:`url(${theme})`}} className="blank" onClick={() => { changeMenuForward(active, currentMenu) }}></div>
            </div>
        )
    }

    

    wheelControll = (e) => 
    {
        const { updateActiveMenu, currentMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) 
        {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) 
        {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) 
            {
                return;
            }
            else if (e.detail.distanceFromLast < 0) 
            {
                updateActiveMenu(1, currentMenu);
            } 
            else 
            {
                updateActiveMenu(0, currentMenu);
            }

        } 
        else if (Math.abs(this.angle - e.detail.angle) > 15) 
        {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) 
            {
                return;
            }
            else if (e.detail.distanceFromLast > 0) 
            {
                updateActiveMenu(1, currentMenu);
            } 
            else 
            {
                updateActiveMenu(0, currentMenu);
            }

        }
    }

    componentDidMount() 
    {
        const 
        { 
            changeMenuBackward ,
            togglePlayPause, 
            seekSongForward, 
            seekSongReverse
        } = this.props;
        const wheelControll = this.wheelControll;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu-button");
        const playPause = document.getElementById("play-pause-button");
        const reverse = document.getElementById("backward-button");
        const forward = document.getElementById("forward-button");

        const longTapGesture = new ZingTouch.Tap({
            maxDelay:10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(menuIcon, 'tap', function (e) 
        {
            changeMenuBackward();
        });
        activeRegion.bind(wheel, 'rotate', function (e) 
        {
            wheelControll(e);
        });
        activeRegion.bind(playPause, 'tap', function (e) 
        {
            togglePlayPause();
        });

        activeRegion.bind(reverse, longTapGesture, function (e) 
        {
            seekSongReverse(e);
        });

        activeRegion.bind(forward, longTapGesture, function (e) 
        {
            seekSongForward(e);
        });
        

    }
}

export default Wheel