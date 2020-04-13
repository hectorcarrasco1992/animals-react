import React from 'react';
import sidebar from './Side'
import './LikeDislike.css'
// import './Sidebars.css';

const likeDislike = (props) => (
    <div className='side'>
        <div>
            <h3>Likes</h3>
            <ul style={{listStyleType: 'none'}}>
                {props.likes.length > 0 ? props.likes.map(({image, name, animalId}) => {
                    return (
                        <sidebar key={animalId}>
                            <div className='sidecard' onClick={() => props.deleteLike(animalId)}>
                                <img src={image} alt="..." />
                                <p>{name}</p>
                            </div>
                        </sidebar>
                    )
                }) : <h6>No likes yet..stop hating</h6>}
            </ul>
        </div>
        <div>
            <h3>Dislikes</h3>
            <ul style={{listStyleType: 'none'}}>
            {props.dislikes.length > 0 ? props.dislikes.map(({image, name, animalId}) => {
                    return (
                        <sidebar key={animalId}>
                            <div className='sidecard' onClick={() => props.deleteDislike(animalId)}>
                                <img src={image} alt="..." />
                                <p>{name}</p>
                            </div>
                        </sidebar>
                    )
                }) : <h6>You Lack Hate</h6>}
            </ul>
        </div>
    </div>
)



export default likeDislike;