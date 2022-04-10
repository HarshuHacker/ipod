import React from 'react';
import '../Assets/CSS/App.css';
import KnowMore from "./knowMore";
import Case from "./Case"

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {

  //   }
  // }
  render() {
    return (
      <div className="App">
        <KnowMore/>
        <Case/>
      </div>
    );
  }
}

export default App;
