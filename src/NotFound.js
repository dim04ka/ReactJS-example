import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render(){
        return(
            <div>
                <h1>Sorry, page not found</h1>
                <h2>ERROR 404</h2>
                <Link to='/' className='btn btn-success'>GO HOME</Link>
            </div>
        )
    }
}