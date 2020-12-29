import React from 'react'

const Names = (props) => {
    return (
        <div>
            <ul>
                {props.searchResults.map((person) =>
                    <li key={person.name}>{person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Names