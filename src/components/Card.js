import React from 'react'

function Card({ video }) {
    const { clip } = video;
    const { name, description, duration, pictures, user, stats } = clip;
    
    return (
        <div className='card-container'>
            <img className='card-img' src={pictures.sizes[3].link} alt=""/> 
            <h1 className="card-title">{name}</h1>
            <h3 className="card-username">{user.name}</h3>
            <div className="card-stats-container">
                <h3 className="card-data">{duration} min. | Views: {stats.plays ? stats.plays : 0}</h3>
            </div>
        </div>
    )
}

export default Card
