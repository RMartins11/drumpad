import React from "react";
import Drumpad from "./Drumpad";

class App extends React.Component{
  render(){
    return(
      <div style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center"}}><Drumpad /></div>
    )
  }
}

export default App;