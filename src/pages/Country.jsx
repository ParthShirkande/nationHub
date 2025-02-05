import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();//automatic loading 
// useTransition() is a React hook used to handle state updates that may take time, making them non-blocking and improving UI responsiveness
// helps prevent UI freezes when handling expensive computations or data fetching.

  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

// WITH FETCH================>
  // useEffect(() => {
  //   startTransition(async () => {
  //     try {
  //       const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
  //       const data = await response.json();
  //       setCountries(data);
  //     } catch (error) {
  //       console.error("Error fetching country data:", error);
  //     }
  //   });
  // }, []);
// useEffect==========>
// Runs only once on mount (if dependency array is []).
// Runs only when dependencies change, preventing redundant API calls.
// Prevents memory leaks by properly handling async operations.
  
useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);
  //[]--> fetch operation runs only once, after the component first renders, fetching the country data without triggering re-renders or repeated fetches.
 
  if (isPending) return <Loader />;

  // console.log(search, filter);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};