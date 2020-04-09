import React, { Component } from 'react'


let animalArray= [
    {image:'./images/tiger.jpeg',type:'Cat',name:'Tiger',description:'Brolic Cat',animalId:'1'},
    {image:'./images/lion.jpeg',type:'Cat',name:'Lion',description:'King Cat',animalId:'2'},
    {image:'./images/panther.jpeg',type:'Cat',name:'Panther',description:'Wakanda Idol',animalId:'3'},
    {image:'./images/jaguar.jpeg',type:'Cat',name:'Jaguar',description:'Slower Cheetah',animalId:'4'},
    {image:'./images/wolf.jpeg',type:'Dog',name:'Wolf',description:'Game of Thrones',animalId:'5'},
    {image:'./images/hyena.jpeg',type:'Dog',name:'Hyena',description:'Scar\'s Homie',animalId:'6'},
    {image:'./images/coyote.jpeg',type:'Dog',name:'Coyote',description:'Never got the RoadRunner',animalId:'1'},
    {image:'./images/fox.jpeg',type:'Dog',name:'Fox',description:'Swiper no Swiping',animalId:'8'},
    {image:'./images/eagle.jpeg',type:'Bird',name:'Eagle',description:'America',animalId:'9'},
    {image:'./images/falcon.jpeg',type:'Bird',name:'Falcon',description:'Almost as cool as a Hawk',animalId:'10'},
    {image:'./images/hawk.jpeg',type:'Bird',name:'Hawk',description:'Cool Hawk',animalId:'11'},
    {image:'./images/owl.jpeg',type:'Bird',name:'Owl',description:'Harry\'s Mail Man',animalId:'12'},

]

class Animals extends Component{
    constructor(){
        super()
        this.state={
            animalArray,
            likes = [],
            dislikes=[]
            
        }
    }

    render(){
        return(
            <div>

                {this.state.animalArray.map(({image,type,name,description,animalId})=>{
                    return(
                        <div>
                            <img src={image} alt="..." style={{width:300,height:300}}/>
                            <p>Type:{type}</p>
                            <p>Name:{name}</p>
                            <p>Description:{description}</p>
                            <p>AnimalId:{animalId}</p>
                        </div>
                    )
                })}


            </div>
        )
    }
}

export default Animals