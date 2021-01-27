import React from 'react'

function Card({ video }) {
    const { clip } = video;
    const { name, description, duration, pictures, user, stats, created_time } = clip;
    let date = created_time.split('-')
    console.log(date)

    return (
        <div className='card-container'>
            <div className="img-container">
                <img className='card-img' src={pictures.sizes[3].link} alt=""/> 
                <div className="middle">
                    <div className="text">{description}</div>
                </div>
            </div>

            <h1 className="card-title">{name}</h1>
            <h3 className="card-username">{user.name}</h3>
            <div className="card-stats-container">
                <h4 className="card-data">{duration} min. | Views: {stats.plays ? stats.plays : 0}</h4>
                <h4 className="card-data">Uploaded: {`${date[2].slice(0, 2)}/${date[1]}/${date[0]}}`}</h4>

            </div>
        </div>
    )
}

export default Card
