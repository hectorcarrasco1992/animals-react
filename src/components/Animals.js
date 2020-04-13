import React, { Component } from 'react';
import Card from './Card';
import LikeDislike from './LikeDislike';
import './animals.css'


let animals= [
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

const searchIt = (term) => (item) => item.type.toLowerCase().includes(term.toLowerCase());

class Animals extends Component {
    state = {
        animals: animals,
        likes: [],
        dislikes: [],
        searchTerm: ''
    }

    likeHandler = (id) => {
        let likeState = [...this.state.likes];
        let dislikeState = [...this.state.dislikes];

        if (likeState.some(obj => obj.animalId === id) || dislikeState.some(obj => obj.animalId === id)) {
            return;
        } else {
            likeState.push(this.state.animals.filter(({animalId}) => animalId === id)[0]);
            this.setState({ likes: likeState });
        };
    };
    
    dislikeHandler = (id) => {
        let likeState = [...this.state.likes];
        let dislikeState = [...this.state.dislikes];

        if (likeState.some(obj => obj.animalId === id) || dislikeState.some(obj => obj.animalId === id)) {
            return;
        } else {
            dislikeState.push(this.state.animals.filter(({animalId}) => animalId === id)[0]);
            this.setState({ dislikes: dislikeState });
        };
    };

    discardHandler = (id) => {
        const discardedAnimal = [...this.state.animals].filter(({animalId}) => animalId !== id);
        const updateLike = [...this.state.likes].filter(({animalId}) => animalId !== id);
        const updateDislike = [...this.state.dislikes].filter(({animalId}) => animalId !== id);

        this.setState({ animals: discardedAnimal, likes: updateLike, dislikes: updateDislike });
    };

    deleteLikeHandler = (id) => {
        const deletedAnimal = [...this.state.likes].filter(({animalId}) => animalId !== id);
        this.setState({ likes: deletedAnimal });
    };

    deleteDislikeHandler = (id) => {
        const deletedAnimal = [...this.state.dislikes].filter(({animalId}) => animalId !== id);
        this.setState({ dislikes: deletedAnimal });
    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        let animal = this.state.animals.filter(searchIt(this.state.searchTerm)).map(({image, type, name, description, animalId}) => {
            return (
                <div key={animalId}>
                    <Card 
                        image={image}
                        name={name}
                        type={type}
                        description={description}
                        like={() => this.likeHandler(animalId)}
                        dislike={() => this.dislikeHandler(animalId)}
                        discard={() => this.discardHandler(animalId)}
                    />
                </div>
            );
        });

        return (
            <div className='animal-page'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <form className="ui form search">
                            <div className="field">
                            <input 
                                onChange={this.handleChange} 
                                type="text" 
                                placeholder="Search..." 
                                value={this.state.searchTerm} />
                            </div>
                        </form>
                    </div>
                    <div className='animal'>
                        {animal}
                    </div>
                </div>
            <LikeDislike 
                likes={this.state.likes}
                dislikes={this.state.dislikes}
                deleteLike={this.deleteLikeHandler}
                deleteDislike={this.deleteDislikeHandler}
                />
            </div>
        );
    };
};

export default Animals;
