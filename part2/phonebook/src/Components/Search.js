import React from 'react';

const Search = (props) => <div>filter by name: <input value={props.newSearch} onChange ={props.handleSearchChange} /></div>



export default Search