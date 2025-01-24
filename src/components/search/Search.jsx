import React, { useState, useContext, useEffect } from "react";
import styles from "./css/search.module.css";
import { StoreContext } from "../../context/StoreContext";

const Search = () => {
  const [searchval, setSearchval] = useState("");
  const [filterval, setFilterval] = useState([]);
  const { food_list } = useContext(StoreContext);

  const handleChange = (e) => {
    setSearchval(e.target.value);
    // console.log("inp: ",food_list);
  };

  const filterSuggestions = () => {
    if (!searchval) return [];
    return food_list.filter((suggestion) =>
      suggestion.name.toLowerCase().includes(searchval.toLowerCase())
    );
  };

  const highlightText = (suggestion) => {
    console.log("sugg",suggestion)
    const regex = new RegExp(`(${searchval})`, "gi");
    return suggestion
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === searchval.toLowerCase() ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        )
      );
  };

  const filteredSuggestions = filterSuggestions();
  console.log("filterval",filterSuggestions())

  return (
    <div className={styles.searchcontainer}>
      <div className={styles.searchview}>
        <div className={styles.searchdiv}>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={searchval}
          />
          {/* {searchval && filteredSuggestions.length > 0 && (
            <div className={styles.suggestionview}>
              <ul>
                {filteredSuggestions.map((item) => (
                  <li key={item._id}> {highlightText(item)}</li>
                ))}
              </ul>
            </div>
          )} */}
          {
            searchval &&  <div className={styles.suggestionview}>
            <ul>
              {food_list.map((item) => (
                <li key={item._id}>{item.name}</li>
              ))}
            </ul>
          </div>
          }
        </div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
