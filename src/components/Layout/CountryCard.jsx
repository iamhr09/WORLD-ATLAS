import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        
        {/* Country Flag */}
        <img src={flags.svg} alt={flags.alt} className="country-flag" />

        {/* Country Info */}
        <div className="countryInfo">
          <p className="card-title">{name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}</p>

          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>

          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>

          <p>
            <span className="card-description">Capital: </span>
            {capital && capital.length > 0 ? capital[0] : "N/A"}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="read-more-btn">Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
