import React from 'react';
import '../Assets/CSS/App.css';

// importing knowmore and case 
import KnowMore from "./knowMore";
import Case from "./Case"

// importing the songs
import song1 from "../Assets/Songs/Bananza.mp3"
import song2 from "../Assets/Songs/MainShairToNahi.mp3"
import song3 from "../Assets/Songs/MeraYaar.mp3"
import song4 from "../Assets/Songs/Sulthan.mp3"
import song5 from "../Assets/Songs/RaitZaraSi.mp3"
import song6 from "../Assets/Songs/Ranjha.mp3"

// importing the song images
import song1Img from "../Assets/Images/songImages/BananzaThumb.jpg"
import song2Img from "../Assets/Images/songImages/BobbyThumb.jpeg"
import song3Img from "../Assets/Images/songImages/MeraYaarThumb.jpeg"
import song4Img from "../Assets/Images/songImages/sulthanThumb.jpeg"
import song5Img from "../Assets/Images/songImages/RaitZaraSiThumb.jpeg"
import song6Img from "../Assets/Images/songImages/RanjhaThumb.jpeg"

// importing the wallpapers
import flowerWallpaper from "../Assets/Images/Wallpapers/flowerWallpaper.webp"
import seaSideWallpaper from "../Assets/Images/Wallpapers/seaSideWallpaper.jpeg"
import spaceWallpaper from "../Assets/Images/Wallpapers/spaceWallpaper.webp"

// importing themes
import blueBg from "../Assets/Images/Theme/blueBG.jpeg"
import SpaceGrayBG from "../Assets/Images/Theme/SpaceGrayBG.jpeg"
import roseGoldBG from "../Assets/Images/Theme/roseGoldBG.jpeg"
import greenBG from "../Assets/Images/Theme/greenBG.jpeg"



class App extends React.Component 
{
  constructor(){
    super()
    this.state = 
    {
      //Active list item
      active: 0,
      //menu Items
      menuItems: ["Now Playing", "Music", "Games", "Settings"],
      //Items in music
      musicItems: ["All Songs", "Artists", "Albums"],
      //songs list
      songItemsUrl: [song1, song2, song3, song4, song5, song6],
      //song images list
      songImgItemsUrl: [song1Img, song2Img, song3Img, song4Img, song5Img, song6Img],
      //song names
      songItems: ["Bananza", "Main Shair To Nahi", "Mera Yaar", "Sulthan", "Rait Zara Si", "Ranjha"],
      //current song
      songIndex: 0,

      // -2 : LockScreen
      // -1: Main Menu
      // 0 : Now Playing
      // 1 : Music
      // 2 : Games
      // 3 : Settings
      // 4 : All Songs
      // 5 : Artists
      // 6 : Albums
      // 7 : Music Playing
      // 8 : Themes
      // 9 : Wheel Colour
      // 10 : WallPaper

      //length of a particular menu
      lengthMenuKey: {"-1":3,1:2,3:2,4:5,8:3,9:3,10:2},
      //which menu can be rendered by key menu
      menuMapping: {"-1":[0,1,2,3], 1:[4,5,6], 3:[8,9,10]},
      //current menu which is lockscreen initially
      currentMenu: -2,
      //Used for navigation forward and backward
      navigationStack: [],
      //current song url
      songUrl: song1,
      //playing or not
      playing: false,
      //current body theme
      theme: blueBg,
      // all the themes options
      themeOptions: [blueBg, greenBG ,roseGoldBG ,SpaceGrayBG],
      //wallpapers
      wallpaperItems: [flowerWallpaper, seaSideWallpaper, spaceWallpaper],
      //current wallpaper
      wallpaper: 2,
      //current audio file
      audio: new Audio(song1),
      //current song img for now playing
      songImgUrl: song1Img,
      //current wheel color
      wheelColor: "white",
       // has to show notification or not
      noty: false,
      //notification text
      notifyText: ""
    }
  }

  // function to be called when a song is completed
  songComplete=()=>
  {
    let songIndex = this.state.songIndex;
    // if it the last song in the list then stop playing after completing
    if (songIndex === this.state.songItemsUrl.length - 1) 
    {
      return
    } 
    else 
    {
      songIndex++;
    }
    const songUrl = this.state.songItemsUrl[songIndex];
    const songImgUrl = this.state.songImgItemsUrl[songIndex];
    this.setState(
    { 
      songIndex: songIndex, 
      songImgUrl: songImgUrl, 
      songUrl: songUrl, 
      audio: new Audio(songUrl) 
    }, () => 
    {
      this.state.audio.play();
    });
  }

  // function to be called when forward button is pressed
  seekSongForward=(e)=>
  {
    var command = true;
    if(this.state.currentMenu === -2)
    {
      return
    }
    if(this.state.playing === false && (this.state.currentMenu !== 7 && this.state.currentMenu !== 0))
    {
      return
    }
    if (this.state.playing === false && (this.state.currentMenu === 7 || this.state.currentMenu === 0)) 
    {
      command = false
    }
    // if pressed for small span of time then move to next song
    if(e.detail.interval < 250)
    {
      this.state.audio.pause()
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.songItemsUrl.length - 1) 
      {
        songIndex = 0;
      } 
      else 
      {
        songIndex++;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];
      this.setState(
      { 
        songIndex: songIndex, 
        songImgUrl: songImgUrl, 
        songUrl: songUrl, 
        audio: new Audio(songUrl) 
      }, () => {
        if(command){
          this.state.audio.play();
        }
      });
    }
    // if pressed for long span of time then seek forward
    else if (e.detail.interval > 250 && e.detail.interval < 10000) 
    {
      const interval = e.detail.interval / 100;
      this.setState((prevState)=>
      {
        prevState.audio.currentTime += interval;  
        return prevState;
      })
    }
  }

  // function to be called when backward button is pressed
  seekSongReverse=(e)=>
  {
    var command = true;
    if (this.state.currentMenu === -2) 
    {
      return;
    }
    if (this.state.playing === false && (this.state.currentMenu !== 7 && this.state.currentMenu !== 0)) 
    {
      return;
    }
    if (this.state.playing === false && (this.state.currentMenu === 7 || this.state.currentMenu === 0)) 
    {
      command = false
    }
    // if pressed for small span of time then move to previous song
    if (e.detail.interval < 250) 
    {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === 0) 
      {
        songIndex = this.state.songItemsUrl.length - 1;
      } 
      else 
      {
        songIndex--;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];
      this.setState(
      { 
        songIndex: songIndex, 
        songImgUrl: songImgUrl, 
        songUrl: songUrl, 
        audio: new Audio(songUrl) 
      }, () => {
        if(command){
          this.state.audio.play();
        }
      });
    } 
    // if pressed for long span of time then seek backward
    else if (e.detail.interval > 250 && e.detail.interval < 10000) 
    {
      const interval = e.detail.interval / 100;
      this.setState((prevState)=>
      {
        prevState.audio.currentTime -= interval;  
        return prevState;
      })
    }
  }

  // function to be called when Play/Pause button is pressed
  togglePlayPause = () => 
  {
    if (this.state.currentMenu === -2) 
    {
      return;
    }
    if (this.state.playing === true) 
    {
      this.setState({ playing: false });
      this.state.audio.pause();
    }
    else 
    {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  }

  // function to be called to update active menu while rotating the track wheel
  updateActiveMenu = (direction, menu) => 
  {
    if (menu !== -1 && menu !== 1 && menu !== 3 && menu !== 4 && menu !== 8  && menu !== 9 && menu !== 10) 
    {
      return;
    }
    
    let min = 0;
    let max = 0;

    max = this.state.lengthMenuKey[menu];

    if (direction === 1) 
    {
      if (this.state.active >= max) 
      {
        this.setState({ active: min })
      } 
      else 
      {
        this.setState({ 
          active: this.state.active + 1 
        })
      }
    } 
    else 
    {
      if (this.state.active <= min) 
      {
        this.setState({ active: max })
      } 
      else 
      {
        this.setState({ 
          active: this.state.active - 1 
        })
      }
    }
  }

  // function to be called to change the theme of iPod body
  setTheme = (id) => {
    let theme = "";
    if (id === 0) {
      theme= this.state.themeOptions[0];
    }
    else if (id === 1) 
    {
      theme= this.state.themeOptions[1]
    } else if (id === 2) 
    {
      theme= this.state.themeOptions[2];
    } else if (id === 3) 
    {
      theme=this.state.themeOptions[3];
      
    }
    this.setState({ 
      theme:theme , 
      noty:true, 
      notifyText:"Theme Changed"})
    return;
  }


  // function to be called to change the colour of the wheel
  setWheelColor = (id) => {
    let wheelColor ="";
    if (id === 0) {
      wheelColor= "white";
    }
    else if (id === 1) {
      wheelColor= "black";
    } else if (id === 2) {
      wheelColor = "yellow";
    } else if (id === 3) {
      wheelColor= "orange";
    }
    this.setState({ 
      wheelColor: wheelColor, 
      noty:true, 
      notifyText:"Wheel Color Changed"
    })
    return;
  }

  // function to be called to change the wallpaper
  setWallpaper = (id) => {
    this.setState({ wallpaper: id , noty:true, notifyText:"Wallpaper Changed"});
    return;
  }

  // function to be called to change the song
  chagePlayingSongFromMusicMenu = (id, navigationStack) => {
    const songUrl = this.state.songItemsUrl[id];
    const songImgUrl = this.state.songImgItemsUrl[id];
    this.state.audio.pause();
    this.setState({ currentMenu: 7, songUrl: songUrl, navigationStack: navigationStack, active: 0, playing: true, songIndex: id, audio: new Audio(songUrl), songImgUrl: songImgUrl }, () => {
      this.state.audio.play();
    });
    return;
  }

  // function to be called to change menu backwards on press of menu button
  changeMenuBackward = () => {

    const navigationStack = this.state.navigationStack.slice();
    if (this.state.currentMenu === -2) {
      return;
    }
    else {
      const prevId = navigationStack.pop();
      this.setState({ 
        currentMenu: prevId, 
        navigationStack: navigationStack, 
        active: 0 
      });
      return;
    }

  }

  // function to be called to change menu forward on press of center button using navigation stack
  changeMenuForward = (id, fromMenu) => {

    const navigationStack = this.state.navigationStack.slice();

    if (fromMenu !== -2 && fromMenu !== -1 && fromMenu !== 1 && fromMenu !== 4 && fromMenu !== 3 && fromMenu !== 8 && fromMenu !== 9 && fromMenu !== 0 && fromMenu !== 7 &&fromMenu !== 10) {
      return;
    }

    if (fromMenu === -2) {
      navigationStack.push(this.state.currentMenu);
      this.setState({ currentMenu: -1, navigationStack: navigationStack, active: 0 });
      return;
    }

    if (fromMenu === -1) {
      navigationStack.push(this.state.currentMenu);
      this.setState({ currentMenu: id, navigationStack: navigationStack, active: 0 });
      return;
    }

    if (fromMenu === 7 || fromMenu === 0) {
      this.togglePlayPause();
      return;
    }

    if (fromMenu === 8) {
      this.setTheme(id);
      return;
    }


    if (fromMenu === 9) {
      this.setWheelColor(id)
      return;
    }

    if (fromMenu === 10) {
      this.setWallpaper(id)
      return;
    }

    navigationStack.push(this.state.currentMenu);

    if (fromMenu === 4) {
      this.chagePlayingSongFromMusicMenu(id, navigationStack, fromMenu);
      return;
    }

    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({ currentMenu: currentMenuID, navigationStack: navigationStack, active: 0 });

  }

  // function to be called to set noty as false after sending the notification
  setNoty=()=>{
    this.setState({noty:false});
    return;
  }

  // for rendering the app
  render() 
  {
    const 
    { 
      audio, 
      active, 
      currentMenu, 
      menuItems, 
      musicItems, 
      songItems, 
      playing, 
      songIndex, 
      theme, 
      songUrl, 
      songImgUrl, 
      wheelColor, 
      wallpaper, 
      wallpaperItems, 
      noty, 
      notifyText 
    } = this.state;
    return (
      <div className="App">
        <KnowMore/>
        <Case 
          songIndex={songIndex} 
          active={active} 
          menuItems={menuItems} 
          musicItems={musicItems} 
          currentMenu={currentMenu} 
          changeMenuForward={this.changeMenuForward} 
          changeMenuBackward={this.changeMenuBackward} 
          updateActiveMenu={this.updateActiveMenu} 
          togglePlayPause={this.togglePlayPause} 
          songItems={songItems} playing={playing} 
          theme={theme} 
          audio={audio} 
          songUrl={songUrl} 
          songImgUrl={songImgUrl} 
          songComplete={this.songComplete}
          seekSongForward={this.seekSongForward} 
          seekSongReverse={this.seekSongReverse} 
          wheelColor={wheelColor} 
          wallpaper={wallpaper} 
          wallpaperItems={wallpaperItems} 
          noty={noty} 
          setNoty={this.setNoty} 
          notifyText={notifyText}/>
      </div>
    );
  }
}

export default App;
