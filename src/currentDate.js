import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';


export default class CurrentDate extends Component {
    render(){
        return(
            <div>
                <Link to='/' className='btn btn-success'> GO HOME</Link>
                <Moment format="DD.MM.YYYY hh:mm:ss" interval={1}>
                </Moment>
            </div>
        )
    }
}