import React from "react";
import "../Assets/CSS/Case.css"
import Wheel from "./Wheel";
import Display from "./Display";

class Case extends React.Component{
    render() {
        const {
            active,
            updateActiveMenu, 
            currentMenu, 
            changeMenuBackward,
            changeMenuForward, 
            menuItems, 
            musicItems,
            togglePlayPause, 
            songItems,
            playing, 
            songIndex,
            theme, 
            audio, 
            songUrl, 
            songImgUrl, 
            seekSongForward, 
            seekSongReverse, 
            wheelColor,
            wallpaper, 
            wallpaperItems, 
            noty, 
            setNoty, 
            notifyText
        } = this.props;
        return (
            <div className="case-container">
                <div style={{background:`url(${theme})`,backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="case">

                    <Display 
                        songIndex={songIndex} 
                        playing={playing} 
                        active={active} 
                        musicItems={musicItems} 
                        menuItems={menuItems} 
                        currentMenu={currentMenu} 
                        songItems={songItems} 
                        audio={audio} 
                        songUrl={songUrl} 
                        songImgUrl={songImgUrl} 
                        wallpaper={wallpaper} 
                        wallpaperItems={wallpaperItems} 
                        noty={noty} 
                        setNoty={setNoty} 
                        notifyText ={notifyText}
                        />

                    <h1>iPod</h1>

                    <Wheel 
                        theme={theme} 
                        active={active} 
                        menuItems={menuItems} 
                        currentMenu={currentMenu} 
                        changeMenuForward={changeMenuForward} 
                        changeMenuBackward={changeMenuBackward} 
                        updateActiveMenu={updateActiveMenu} 
                        togglePlayPause={togglePlayPause} 
                        seekSongForward={seekSongForward} 
                        seekSongReverse={seekSongReverse} 
                        wheelColor={wheelColor}/>
                    
                </div>
            </div>
        )
    }
}

export default Case