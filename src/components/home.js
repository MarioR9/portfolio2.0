import React from 'react'
import {Image} from 'react-bootstrap';
export default class Home extends React.Component{
    render(){
        return(
            <div className='homePage'>
                <div class="container">
                <div class="dot dot-1"></div>
                <div class="dot dot-2"></div>
                <div class="dot dot-3"></div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                    </filter>
                </defs>
                </svg>
            </div>
        )
    }
}