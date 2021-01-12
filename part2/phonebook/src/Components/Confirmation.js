import React from 'react'

const Confirmation = ({ name }) => {
    if (name === null) return null;
    return (
        <div className="confirmation">
            Added <strong>{name}</strong>
        </div>
    )
}

export default Confirmation