import React from 'react'
import Weather from './Weather'

const CountryInfo = ({country}) => {
    return (
        <>
            <Heading country={country.name} />
            <General capital={country.capital} pop={country.population} />
            <Languages langs={country.languages} />
            <Flag flag={country.flag} />
            <Weather country={country.name} />
        </>

    )
}

const Flag = ({flag}) => {
    return <img src={flag} alt="flag" height="100" width="100"></img>
}

const General = ({capital, pop}) => {
    return (
        <>
        <div>
            Capital: {capital}

        </div>
        <div>
            Population: {pop}
        </div>
        </>
    )
}

const Languages = ({langs}) => {
    return (
        <>
        <h3>Languages</h3>
        <ul>
            {langs.map((element) => <li key={element.name}>{element.name}</li>)}
        </ul>
        </>
    )
}


const Heading = ({ country }) => {
    return <h1>{country}</h1>
}

const Countries = ({search, data, setSearch}) => {

    const results = data.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))

    if (results.length === 1) {
        return (
            <CountryInfo country={results[0]} />
        )
    } else if (results.length <= 10) {
        return (
            <ul>
                {results.map(e => <li key={e.name}>{e.name}<button onClick={() => setSearch(e.name)}>show</button></li>)}
            </ul>
        )
    } else {
        return (
            <div>
                Too many results...
            </div>
        )
    }
}


export default Countries