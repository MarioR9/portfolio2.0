import React from 'react'


export default class notFound extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            intro: true,
        };
      }
    componentDidMount=()=>{
        setTimeout(function(){
            this.setState({intro: false});
       }.bind(this),4000);
    }
    
    render(){
        const divStyle = {
            overflow: 'auto',
            backgroundColor: "#343a40",
            position: 'fixed',
            margin:0,
            top:0,
            left:0,
            width: '100%',
            height: '100%'
        }
        return(
            <div>
            {this.state.intro === true?
            <div style={divStyle}>
            <div class="containerAnimation">
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
            : 
            <div style={divStyle}>
                <div className='error-container'> 
                <img alt='error404' class="error" src='../assets/logos/404.png'/>
                </div>
                
            </div>
                }
            </div>
        )
    }
}


