import React from 'react';
import "../Assets/CSS/knowMore.css"

class knowMore extends React.Component
{
    constructor()
    {
        super()
        this.state={
            divOpen: false,
            arrow: "fa-solid fa-angle-down"
        }
    }

    openDiv=()=>
    {
        if(this.state.divOpen===true)
        {
            this.setState({divOpen:false})
            this.setState({arrow:"fa-solid fa-angle-down"})
        }
        else
        {
            this.setState({divOpen:true})
            this.setState({arrow:"fa-solid fa-angle-up"})
        }
    }
    render()
    {
        const {divOpen,arrow} = this.state;
        let cssProp;
        if(divOpen===false)
        {
            cssProp = {top: "-700px"}
        }
        else
        {
            cssProp = {top: "55px"}
        }
        return (
            <div className="information-container" style={cssProp}>
                <div className="info-div">
                    <h3>Controls For iPod</h3>

                    <ol type="1">

                        <li>
                            To unlock screen you have to press center button and to lock screen you have to press menu button in main menu.
                        </li>

                        <li>
                            To play and pause music in any menu you need to press play/pause button on bottom.
                        </li>

                        <li>
                            Short pressing on forward/reverse will take you to next/previous track (ONLY WHILE PLAYING)
                        </li>

                        <li>
                            Long pressing on forward/reverse will seek the song in forward/reverse (ONLY WHILE PLAYING)
                        </li>

                        <li>
                            To navigate between a menu items you need to rotate on track wheel
                        </li>

                        <li>
                            To go to next menu or go inside a menu press center button and to go to previous menu press menu button
                        </li>

                        <li>
                            Songs do play, Please checkout settings menu
                        </li>

                    </ol>

                    <ul type="none">
                        <li>
                            <b>Github-Link : </b> &nbsp;
                            <a href="https://github.com/HarshuHacker" target={"_blank"}>
                                iPod
                            </a> 
                        </li>

                        <li>
                            <b>App Developed by : </b> &nbsp;
                            <a href="https://github.com/HarshuHacker" target={"_blank"}>
                                HarshuHacker
                            </a>
                        </li>
                    </ul>

                    

                </div>

                <button 
                    id="info-btn" 
                    onClick={this.openDiv}>
                        How To Use <i className={arrow}></i>
                </button>
            </div>
        )
    }
}

export default knowMore