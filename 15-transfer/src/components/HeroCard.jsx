import { useState } from 'react'

function HeroCard(name, power, level, image, skills, info) {

    return (
        <article className="card">
            <h3>{title}</h3>
            <p className='muted'>Author: {author}</p>
            <img className='cover' src={image}
                alt={`Image for ${name}`} loading="lazy"
                decoding="async"></img>
            <div className='button'>
                <button onClick={onAdd} disabled={isAdded}>
                    {isAdded ? `In Favorites` : `Favorite`}
                </button>
            </div>
        </article>
    );
}

export default HeroCard