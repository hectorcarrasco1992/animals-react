import React, { Component } from 'react'


let animalArray= [
    './images/tiger.jpeg',
    './images/lion.jpeg',
    './images/panther.jpeg',
    './images/jaguar.jpeg',
    './images/wolf.jpeg',
    './images/fox.jpeg',
    './images/hyena.jpeg',
    './images/coyote.jpeg',
    './images/hawk.jpeg',
    './images/eagle.jpeg',
    './images/owl.jpeg',
    './images/falcon.jpeg',

]

class Animals extends Component{
    constructor(){
        super()
        this.state={
            image:'./images/tiger.jpeg',
            type:'',
            name:'',
            description:'',
            animalId:''
            
        }
    }

    render(){
        return(
            <div>
                <img src={this.state.image} alt="..." style={{width:300,height:300}}/>
            </div>
        )
    }
}

export default Animals