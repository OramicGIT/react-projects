import { useState } from 'react'

export default function BookCard({
    title, author, image, onAdd, isAdded=false
}){
    return (
        <article className="card">
            <h3>{title}</h3>
            <p className='muted'>Author: {author}</p>
            <img className='cover' src={image} 
            alt={`Cover for ${title}`} loading="lazy" 
            decoding="async"></img>
            <div className='button'>
                <button onClick={onAdd} disabled={isAdded}>
                    {isAdded ? `In Favorites`: `Favorite`}
                </button>
            </div>
        </article>
    );
}