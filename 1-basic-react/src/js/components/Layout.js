import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    //setting initial state - manages virtual dom 
    this.state = {
      title: "Welcome",
    };
    
  }

  changeTitle(title) {
    this.setState({title});
  }


  
//Bind this 
// <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
  render() {
    const titlee = "testtt";
    return (
      
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer    example={titlee}/>
      </div>
    );
  }
}
