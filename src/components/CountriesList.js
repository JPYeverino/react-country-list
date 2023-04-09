import React from 'react';
import Country from './Country';

import styles from './countriesList.module.css';

function CountriesList({ countriesList, onViewMore }) {
  console.log('CountriesList rendered');
  return (
    <div className={styles['container']}>
      <ul>
        {countriesList.map((country) => {
          return (
            <Country
              key={`${country.name.common}~${country.cca2}`}
              country={country}
              onViewMore={onViewMore}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(CountriesList);
