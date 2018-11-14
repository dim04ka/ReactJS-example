import React, { Component } from 'react';
import FirstChild from './firstChild';
import SecondChild from './secondChild';
import { Link } from 'react-router-dom';

export default class News extends Component {
    render(){
        return(
            <div className='news-page'>
                <div>
                    <Link to='/' className='btn btn-success'>GO HOME</Link>
                </div>
                <div className='content'>
                    <FirstChild />
                    <SecondChild />
                </div>
            </div>
        )
    }
};