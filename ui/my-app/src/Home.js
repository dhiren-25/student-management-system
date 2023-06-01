import React,{Component} from 'react';

export class Home extends Component{
    render(){

        const myStyle={
            
            height:'65vh',
            
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return(
            
            <div style={myStyle}> 
            <h3>Welcome to the SITE</h3></div>
            
        )
    }
}