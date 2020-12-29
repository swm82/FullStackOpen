import React, { useEffect, useState } from 'react'
import Search from './Search';
import Countries from './Countries'
import Axios from 'axios';

const App = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])


    // Fetch data
    useEffect(() => {
        Axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setData(response.data)
            })
        
    }, []);

    if (data) {
        return (
            <div>
                <Search search={search} setSearch={setSearch} />
                {search ? <Countries search={search} data={data} setSearch={setSearch}/> : null}
                {/* <Countries results={results} countryInfo={countryInfo} data={data} showInfo={showInfo} /> */}
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}

export default App