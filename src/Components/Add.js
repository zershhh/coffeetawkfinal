import React, { Component } from 'react';

class Add extends Component {

    showdata(){
        

    }
    state = {  }
    render() { 
        return (  
            <div>
            <br/>
                <button onClick ={this.props.handleClicked} >Add Data</button>
                
            </div>
            
        );
    }
}
 
export default Add ;