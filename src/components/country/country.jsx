import { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    console.log(country)
    
    const {name, flags, population, area, cca3} = country;

    // console.log(name)

   const [visited, setVisited]= useState(false)

   const handleClick = () => {
    setVisited(!visited)
   }

   
    return (
        <div className={`country ${visited ? 'visited' : 'on visid'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name : {name.common}</h3>
            <img src={flags.png} />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Visited Flag</button> <br/>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button> <br/>
            <button onClick={handleClick}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited in country' : 'I go it country'}
        </div>
    );
};

export default Country;