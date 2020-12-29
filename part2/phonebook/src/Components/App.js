import React, { useEffect, useState } from 'react'
import Search from './Search';
import PersonForm from './PersonForm';
import Names from './Names'
import Axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ searchResults, setSearchResults ] = useState([]);

  useEffect(() => {
    console.log('effect')
    Axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (e) => {
    e.preventDefault();
    const isFound = persons.find(person => person.name === newName);
    if (isFound) {
      alert(`${newName} is already in phonebook`);
      setNewName('');
      return;
    }
    const person = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(person));
    setNewName('');
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }


  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
    console.log(newSearch);
  }


  useEffect(() => {
    const person = persons.filter((person) => {
      console.log("Person compare: ", person.name.toLowerCase())
      console.log("search compare: ", newSearch.toLowerCase())
      console.log(person.name.toLowerCase().includes(newSearch.toLowerCase()))
      return person.name.toLowerCase().includes(newSearch.toLowerCase())
    });
    setSearchResults(person);
    console.log(person);
  }, [newSearch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />

      <h2>Add new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addName={addName} />

      <h2>Numbers</h2>
      <Names searchResults={searchResults} />
    </div>
  )
}

export default App