import { useState } from 'react'

export default function Favorites(
    {items = [], onRemove, hasFavorites, ariaLabel = "Favorite List"}
){
    if (!items?.length){
        return (
            <p className="muted">
                {hasFavorites ? 'Nothing in the current category.': 'Nothing here. Come back later!'}
            </p>
        )
    }
    return(
        <ul className="list" ariaLabel={ariaLabel}>
            {items.map((item) => (
                <li key={`${item.type}-${item.id}`} className="row" style={{justifyContents: `space-between`}}>
                    <div>
                        <span className="tag">
                            {item.type}
                        </span>
                        {item.label}
                    </div>
                    <button
                    type="button"
                    className="button remove"
                    onClick={() => onRemove(item)}
                    title="Delete"
                    aria-label={`Delete ${item.label} from favorites`}
                    >
                        ❌
                    </button>
                </li>
            )
        )}
        </ul>
    )
}