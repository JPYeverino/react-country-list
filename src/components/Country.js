import React from 'react';

import styles from './country.module.css';

function Country({ country, onViewMore }) {
  return (
    <div className={styles['country']}>
      <div>
        <span>Name:{country.name.common} </span>
      </div>
      <img
        className={styles['flag-thumbnail']}
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <div>
        <span>
          Population: {country.population} {'| '}
        </span>
        <span>
          Region: {country.region} {'| '}
        </span>
        <span>Capital: {country.capital}</span>
      </div>
      <div>
        <strong
          className={styles['view-more']}
          onClick={() => onViewMore(country.name.official)}
        >
          View more...
        </strong>
      </div>
    </div>
  );
}

export default React.memo(Country);

// Its name

// Its flag (display the icon in smaller size)

// Population

// Region

// Capital

// ccn3": "052",
