import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import CountriesList from './CountriesList';
import ExpandedCountry from './ExpandedCountry';
import Search from './Search';

const useMountEffect = (fn) => {
  useEffect(() => {
    fn();
  }, []);
};

function App() {
  //Make API call - countres[] pass to list, pass onViewMore handler (country)
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [search, setSearch] = useState('');

  const getAllCountries = async () => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all'); // Countries[]

      setCountriesList(data);
    } catch (error) {
      console.log(error); // error
    }
  };

  useMountEffect(() => {
    getAllCountries();
  });

  useEffect(() => {
    const getCountries = async (search) => {
      if (search === '') {
        getAllCountries();
      } else {
        try {
          //Loading true
          const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${search}`
          ); // Countries[]
          //Loading false
          setCountriesList(data);
        } catch (error) {
          // Loading false
          console.log(error); // error
        }
      }
    };

    getCountries(search);
  }, [search]);

  const onViewMore = useCallback((countryOfficialName) => {
    setSelectedCountry(countryOfficialName);
  }, []);

  const onSearch = useCallback((search) => {
    setSelectedCountry('');
    setSearch(search);
  });

  return (
    <div className="App">
      <div>
        <div>
          <Search onSearch={onSearch} />
        </div>
        <div>
          <h2>Countries:</h2>
          <CountriesList
            countriesList={countriesList}
            onViewMore={onViewMore}
          />
        </div>
      </div>

      <div>
        {selectedCountry && <ExpandedCountry countryName={selectedCountry} />}
      </div>
    </div>
  );
}

export default App;

// Its flag (should display larger image while viewing the details)

// Population

// Region

// Capital

// Native Name

// Currencies used

// Languages

// Border countries
