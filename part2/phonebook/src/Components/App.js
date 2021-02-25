import React, { useEffect, useState } from 'react'
import Search from './Search';
import PersonForm from './PersonForm';
import Names from './Names'
import phonebook from '../services/phonebook'
import Confirmation from './Confirmation'
import Error from './Error'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newInfo, setNewInfo ] = useState({
    name: '',
    number: ''
  });
  const [ newSearch, setNewSearch ] = useState('')
  const [ searchResults, setSearchResults ] = useState([]);
  const [ confirmation, setConfirmation ] = useState(null)
  const [ error, setError ] = useState(null)

  // Get data from server
  useEffect(() => {
    phonebook
      .getAll()
      .then(response => setPersons(response))
  }, [])

  const addName = (e) => {
    e.preventDefault();
    const isFound = persons.find(person => person.name === newInfo.name);
    let update = false;
    // if user in database, ask to update.  else add to database
    if (isFound) {
      update = window.confirm(`${newInfo.name} is already in phonebook.  Would you like to replace the info?`);
      console.log(update)
    }
    const person = {
      name: newInfo.name,
      number: newInfo.number
    };
    if (!isFound) {
      phonebook
        .create(person)
        .then(response => {
          setPersons(persons.concat(response));
          setConfirmation(person.name)
          setTimeout(() => {
            setConfirmation(null)
          }, 5000)
        })
        .catch(error => {
          setError(error.response.data.error)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
    } else if (update) {
      phonebook
        .update(isFound.id, person)
        .then(response => {
          setPersons(persons.map(prevPerson => prevPerson.name !== person.name ? prevPerson : response))
        })
        .catch(error => {
          alert(`${person.name} was already deleted from server`);
          setPersons(persons.filter(prevPerson => person.name !== prevPerson.name))
        })
    }
    setNewInfo({
      name: '',
      number: ''
    });

  }
  const handleChange = e => {
    setNewInfo({...newInfo, [e.target.name]: e.target.value})
  }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  }

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name}`)) {
      phonebook
        .deletePerson(personToDelete.id)
        .then(setPersons(persons.filter(person => person.id !== personToDelete.id)))
    }
  }

  useEffect(() => {
    const person = persons.filter((person) => {
      return person.name.toLowerCase().includes(newSearch.toLowerCase())
    });
    setSearchResults(person);
  }, [newSearch, persons]);

  return (
    <div>
      <Confirmation name={confirmation} />
      <Error error={error} />
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />

      <h2>Add new</h2>
      <PersonForm newInfo={newInfo} handleChange={handleChange} addName={addName} />

      <h2>Numbers</h2>
      <Names searchResults={searchResults} deletePerson={deletePerson} />
    </div>
  )
}

export default App