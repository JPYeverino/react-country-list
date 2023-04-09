import React, { useEffect, useState } from 'react';

import styles from './expandedCountry.module.css';
import axios from 'axios';

function ExpandedCountry({ countryName }) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getCountry = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );

      setCountry(data[0]);
    };

    getCountry();
  }, [countryName]);

  return (
    <div className={styles['container']}>
      {country.name && <h2>{country.name.official}</h2>}
    </div>
  );
}

export default React.memo(ExpandedCountry);
