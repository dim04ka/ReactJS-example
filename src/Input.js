import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.ClearText = this.ClearText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    ClearText = () => {
      this.setState({text: ''})
    };


    handleChange(e) {
        this.setState({text: e.target.value})
    };



    render(){
        return(
            <div className='input-page'>
                <Link to='/' className='btn btn-success'>GO HOME</Link>
                <div className="input-group-append">
                    <input type='text' onChange={this.handleChange} value={this.state.text}/>
                    <button className='btn btn-success' onClick={this.ClearText}>CLEAR</button>
                </div>
            </div>
        )
    }
}