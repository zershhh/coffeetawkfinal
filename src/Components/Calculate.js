import React, { Component } from 'react';

class Calculate extends Component {

     getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    
    
    state = {  }
    render() { 
        return (  
            <div>
                <br/>
                <button onClick ={this.props.handleClicked} >Calculate Correlation</button>
                
            </div>
        );
    }
}
 
export default Calculate ;