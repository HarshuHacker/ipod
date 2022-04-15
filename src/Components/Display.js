import React from "react";
import "../Assets/CSS/Display.css"
import game from "../Assets/Images/blankOptions/Games.png"
import artists from "../Assets/Images/blankOptions/Artists.png"
import albums from "../Assets/Images/blankOptions/Albums.png"

import Navbar from "./Navbar";
import Menu from "./Menu";
import Music from "./Music";
import Songs from "./Songs"
import Settings from "./Settings";
import Playing from "./Playing";
import Themes from "./Themes";
import WheelColor from "./WheelColor";
import LockScreen from "./LockScreen"
import Wallpaper from "./Wallpaper"

class Display extends React.Component {
    render(){
        const { active, currentMenu, menuItems, musicItems,songItems, playing, songIndex, audio, songUrl ,songImgUrl,wallpaper,wallpaperItems, noty, setNoty,notifyText, songComplete} = this.props;
        return(
            <div style={{backgroundImage: `url(${wallpaperItems[wallpaper]})`}} className="display">

                <Navbar 
                    noty={noty} 
                    setNoty={setNoty} 
                    playing={playing} 
                    notifyText ={notifyText} 
                />

                {currentMenu===-2&&<LockScreen/>}

                {currentMenu === -1 && <Menu 
                    songImgUrl={songImgUrl} 
                    menuItems={menuItems} 
                    active={active} 
                />}

                {currentMenu === 1 && <Music 
                    musicItems={musicItems} 
                    active={active} 
                />}

                {currentMenu === 2 && <div className="blank-div">
                    <h1 className="empty-text" style={{marginTop: "0px", marginBottom: "10px"}}>
                        Games
                    </h1>
                    <img src={game} height= "210px" width="200px"></img>
                    

                </div>}

                {currentMenu === 3 && <Settings 
                    active={active}
                />}

                {currentMenu === 4 && <Songs 
                    songItems={songItems} 
                    active={active} 
                />}

                {currentMenu === 5 && <div className="blank-div">
                    <h1 className="empty-text" style={{marginTop: "0px", marginBottom: "10px"}}>
                        Artists
                    </h1>
                    <img src={artists} height= "210px" width="200px"></img>
                </div>}

                {currentMenu === 6 && <div className="blank-div">
                    <h1 className="empty-text" style={{marginTop: "0px", marginBottom: "10px"}}>
                        Albums
                    </h1>
                    <img src={albums} height= "210px" width="200px"></img>
                </div>}

                {(currentMenu === 0 ||currentMenu===7) && <Playing 
                    songImgUrl={songImgUrl} 
                    audio={audio} 
                    songUrl={songUrl} 
                    playing={playing} 
                    songIndex={songIndex} 
                    songItems={songItems} 
                    songComplete={songComplete}
                />}

                {currentMenu===8&&<Themes 
                    active={active}
                />}

                {currentMenu===9&&<WheelColor 
                    active={active}
                />}

                {currentMenu===10&&<Wallpaper 
                    active={active}
                />}
                
            </div>
        )
    }
}

export default Display