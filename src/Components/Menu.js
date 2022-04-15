import React from 'react';
import "../Assets/CSS/Menu.css"
import game from "../Assets/Images/menuItemsWallpaper/game.webp"
import music from "../Assets/Images/menuItemsWallpaper/music.jpeg"
import settings from "../Assets/Images/menuItemsWallpaper/setting.png"

// Renders main menu
class Menu extends React.Component {
    render() {
        const { active,menuItems, songImgUrl} = this.props;
        return (

            <div className="menu-container">
                <div className="main-menu">
                    <ul>
                        {menuItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">{element}</li>:<li key={index}>{element}</li>
                        })}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 0 && <img className="leaf-img" src={songImgUrl} alt=""></img>}
                    {active === 1 && <img className="leaf-img" src={music} alt=""></img>}
                    {active === 2 && <img className="leaf-img" src={game} alt=""></img>}
                    {active === 3 && <img className="leaf-img" src={settings} alt=""></img>}
                </div>
            </div>
        )
    }
}


export default Menu;