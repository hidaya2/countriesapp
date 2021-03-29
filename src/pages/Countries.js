import useCountries from "../hooks/useCountries"
import Card from "../components/Card";
import Spinner from "../components/Spinner";

function Countries() {
    const url = "https://restcountries.eu/rest/v2/all";
    const { countries, isPending, error } = useCountries(url)
    return (
        <section className="container">
            <div>
            <div className="border-button bg-transparent text-center">
              <h1>List of countries</h1> 
            </div>
            <form>
                <input type="text" placeholder="search for countries"/>
                <button>SEARCH</button>
            </form>
            </div>
            <div className="row">
               {isPending &&<Spinner/>}
               {error &&<div>{error}</div>}
               {countries && countries.map((country) => (
                   <Card name={country.name}
                   img={country.flag}
                   population={country.population}/>
               ))}
            </div>
        </section>
    )    
}

export default Countries
