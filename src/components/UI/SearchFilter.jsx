export const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
  }) => {
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  
    const sortCountries = (value) => {
      const sortCountry = [...countries].sort((a, b) => {
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortCountry);
    };
  

// SORTING EXPLAINATION
// Initial array:
// [ 
//   { name: { common: "India" } },
//   { name: { common: "Australia" } },
//   { name: { common: "Brazil" } },
//   { name: { common: "Canada" } }
// ]
// Comparison (localeCompare):
// Compare "India" with "Australia" → "Australia" comes before "India" (ascending).
// Compare "India" with "Brazil" → "Brazil" comes before "India" (ascending).
// Compare "India" with "Canada" → "Canada" comes before "India" (ascending).
// Sorted array:
// [
//   { name: { common: "Australia" } },
//   { name: { common: "Brazil" } },
//   { name: { common: "Canada" } },
//   { name: { common: "India" } }
// ]

    return (
      <section className="section-searchFilter container">
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
          />
        </div>
  
        <div>
          <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>
  
        <div>
          <button onClick={() => sortCountries("des")}>Desc</button>
        </div>
  
        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
  };