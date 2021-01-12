import React from 'react'

const PersonForm = (props) => {

    return (
        <form>
        <div>
          name: <input name='name' value={props.newInfo.name} onChange={props.handleChange}/>
        </div>
        <div>number: <input name='number' value={props.newInfo.number} onChange={props.handleChange} /></div>
        <div>
          <button type="submit" onClick={props.addName}>add</button>
        </div>
      </form>
    )
}

export default PersonForm