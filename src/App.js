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
    alert("Web Page Under Construction!");
}

  datasaved(){
    alert("The data has been successfully saved")
  }

  render() {
    return (
      <div className="App">
        <Customers />
        <Drinks />
        <Voucher />
        <Add handleClicked={this.datasaved}/>
        <Calculate handleClicked={this.unfinished} />
      </div>
    );
  }
}

export default App;