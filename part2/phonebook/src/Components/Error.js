import React from 'react'

const Error = ({ error }) => {
    if (error === null) return null;
    return (
        <div className="error">
            <strong>{error}</strong>
        </div>
    )
}

export default Error