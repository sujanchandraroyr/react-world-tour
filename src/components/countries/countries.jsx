import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (country) => {
        console.log(country)
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
    }
    
    const handleVisitedFlag = (flag) => {
        console.log('Visited Flag')
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag)

    }

    return (
        <div>
            
           <h4>Countries: {countries.length}</h4> 
           <div>
           <h5>Visited:{visitedCountries.length}</h5>
           <ul>
                {
                    visitedCountries.map((country) => <li key = {country.cca3}>{country.name.common}</li>)
                }
           </ul>
           </div>
           <div className="visitedflag">
           {
            visitedFlag.map((flag, indx) => <img key ={indx} src={flag}></img>)
           }
           </div>
           <div className="countries-container">
           {
            countries.map((country) => <Country key ={country.cca3}
             handleVisitedCountries = {handleVisitedCountries}
             handleVisitedFlag = {handleVisitedFlag}
               country = {country}>
                
               </Country>)
           }
           </div>
        </div>
    );
};

export default Countries;