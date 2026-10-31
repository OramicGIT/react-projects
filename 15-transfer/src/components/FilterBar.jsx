import { useState } from 'react'

export default function Filter({
    filter, setFilter, heroCount = 0, bookCount = 0, total = 0, query, setQuery
}) {
    const filterButtons = [{ id: 'all', label: "All" }, { id: 'book', label: "Only books" }, { id: 'hero', label: "Only heroes" }];

    return (
        <div className="toolbar">
            <span class="badge">Total: {total}</span>
            <span class="badge">Books: {bookCount}</span>
            <span class="badge">Heroes: {heroCount}</span>

            {
                filterButtons.map(btn => (
                    <button className={`button ghost ${filter == btn.id ? 'filter-on': ''}`} key={btn.id} type="button" onClick={() => setFilter(btn.id)}>
                        {btn.label}
                    </button>
                ))
            }
        </div>
    );
}