import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';



class App extends React.Component{
    getValue = (e) => {
        e.preventDefault()
        console.log(this.inputRef.value);
    }
    render(){
        return(
            <form onSubmit={this.getValue}>
                <label>
                    <input ref ={(inputRef) => this.inputRef = inputRef } className='input' type="text"/>
                </label>
                <label><input type="submit"/></label>
            </form>
        )
    }
}
export default App;
