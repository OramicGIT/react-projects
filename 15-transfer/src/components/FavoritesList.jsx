import { useState } from 'react'

export default function Favorites(items = [], onRemove, hasFavorites, ariaLabel = "Favorite List") 
{
    return(
        <ul className="list" ariaLabel={ariaLabel}>
            {items.map((item) => (
                <li key={`${item.type}-${item.id}`} className="row" style={{justifyContents: `space-between`}}>
                    <div>
                    </div>
                    <button>
                        ❌
                    </button>
                </li>
            )
        )}
        </ul>
    )
}