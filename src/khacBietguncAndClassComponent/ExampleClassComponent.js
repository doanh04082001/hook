import React, { Component } from "react";

export default class ExampleClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
     handleCkick = () => {
        //gọi setCout để update lại state count
          this.setState({count: this.state.count + 1});
          
    }
    render(){
        return(
            <div>
                <pre>Functional component</pre>
                <p> you click  {this.state.count} times </p>
                <button type="button" onClick={this.handleCkick}>Submit</button>
            </div>
        )
    }
}