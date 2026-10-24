import { useState } from 'react'

export default function HeroCard({name, power, level, image, skills = [], info = [], onHello, onAdd, isAdded, children }) {
    const isHighLevel = level >= 95;

    return (
        <article className="card">
            <h3>{name}</h3>
            <p className={isHighLevel ? "high" : "normal"} >Level: {level}</p>
            <p>Power: {power}</p>
            <img className='cover' src={image} 
            alt={`Image for ${name}`} loading="lazy" 
            decoding="async"></img>

            {skills.length ? <div className='row'>
                {skills.map((s, i) => <span key={i} className="tag">{s}</span>)}
            </div> : null}

            {info?.city ? <p className='muted'>City: {info.city} </p> : null}

            {children}

            <p></p>

            <div className='row'>
                <button className="button" onClick={onAdd} disabled={isAdded}>
                    {isAdded ? `In Favorites`: `Favorite`}
                </button>
                
                <button className="button" onClick={onHello}>
                    Hello!
                </button>
            </div>
        </article>
    );
}