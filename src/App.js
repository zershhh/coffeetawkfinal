import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Components/Customers'
import Drinks from './Components/Drinks'
import Voucher from './Components/Voucher'
import Add from './Components/Add'
import Calculate from './Components/Calculate'

class App extends Component {
   unfinished() {
    alert("Calculating........");
}

  datasaved(){
    
  }

  reset(){
    document.getElementById("select1").selectedIndex = 0; //1 = option 2
    document.getElementById("select2").selectedIndex = 0; //1 = option 2
    document.getElementById("select3").selectedIndex = 0; //1 = option 2
    alert("The data has been successfully saved")
    }

  render() {
    return (
      <div className="App">
        <Customers />
        <Drinks />
        <Voucher />
        <Add handleClicked={this.reset}/>
        <Calculate handleClicked={this.unfinished} />
      </div>
    );
  }
}

export default App;