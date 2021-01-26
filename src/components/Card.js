import React, { useState } from 'react'

function Card({ video }) {
    const { clip } = video;
    const { name, description, duration, pictures, user, stats } = clip;
    const [cardImgClass, setCardImgClass] = useState('card-img');
    
    return (
        <div className='card-container'>
            <div className="img-container">
                <img className={cardImgClass} src={pictures.sizes[3].link} alt=""/> 
                <div class="middle">
                    <div class="text">{description}</div>
                </div>
            </div>

            <h1 className="card-title">{name}</h1>
            <h3 className="card-username">{user.name}</h3>
            <div className="card-stats-container">
                <h3 className="card-data">{duration} min. | Views: {stats.plays ? stats.plays : 0}</h3>
            </div>
        </div>
    )
}

export default Card
