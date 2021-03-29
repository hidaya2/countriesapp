
import Spinner from "../components/Spinner";
import useCountries from "../hooks/useCountries";


function Details({match}) {
    const name = match.params.name;

    const { error, isPending, countries } = useCountries(
        `https://restcountries.eu/rest/v2/all/name/${name}`
    );


    return (
        <div className="container">
            <h1 className="m-5 border-bottom bg-transparent4">Detail page</h1>
            <div>
                <div>
                  {isPending && <Spinner></Spinner>}
                  {error && <div>opps !! something went wrong</div>}
                  {countries && 
                  countries.map((country) => (
                      <div className="row">
                          <img
                            src={country.flag}
                            style={{ height:"500", width: "auto" }}
                            alt={country.name}/>
                            <div className="m-3">
                                <h2 className="mb-3 text-info">Country: {country.name}</h2>
                                <h2>Region :{country.region}</h2>
                                <h3>Sub_region :{country.population}</h3>
                                
                                <h2>Capital city: {country.capital}</h2>
                                {country.currencies.map((cur) =>(
                                    <span>
                                        {cur.symbol}-{cur.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                   ))}
                </div>
            </div>
        </div>
    );
}

export default Details
