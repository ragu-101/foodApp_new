import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./css/search.module.css";
import { StoreContext } from "../../context/StoreContext";
import { HiX } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  const [searchval, setSearchval] = useState("");
  const [filterval, setFilterval] = useState([]);
  const [mobfocus, setmobfocus] = useState(false);
  const { food_list } = useContext(StoreContext);
  const inpref = useRef(null);

  const handleChange = (e) => {
    setSearchval(e.target.value);
  };

  const focusInput = () => {
    setmobfocus(true);
  };

  const filterSuggestions = () => {
    if (!searchval) return [];
    return food_list.filter((suggestion) =>
      suggestion.name.trim().toLowerCase().includes(searchval.toLowerCase())
    );
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (inpref.current && !inpref.current.contains(event.target)) {
      setmobfocus(false);
    }
  };

  // const highlightText = (suggestion) => {
  //   console.log("sugg",suggestion)
  //   const regex = new RegExp(`(${searchval})`, "gi");
  //   return suggestion
  //     .split(regex)
  //     .map((part, index) =>
  //       part.toLowerCase() === searchval.toLowerCase() ? (
  //         <strong key={index}>{part}</strong>
  //       ) : (
  //         part
  //       )
  //     );
  // };

  const filteredSuggestions = filterSuggestions();

  return (
    <div
      className={`${styles.searchcontainer} ${
        mobfocus ? styles.searchcontainemob : ""
      }`}
    >
      <span className={styles.closeicon} onClick={() => setmobfocus(false)}>
        <HiX color="#fff" />
      </span>
      <div className={styles.searchview}>
        <div className={styles.searchdiv}>
          <HiOutlineSearch className={styles.searchicon} />
          <input
            type="text"
            placeholder="Search"
            onClick={focusInput}
            onChange={handleChange}
            value={searchval}
            ref={inpref}
          />
          {searchval && (
            <div className={styles.suggestionview}>
              <ul>
                {/* {filteredSuggestions.map((item) => (
                  <li key={item._id}> {highlightText(item)}</li>
                ))} */}

                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item) => (
                    <li key={item._id}>{item.name}</li>
                  ))
                ) : (
                  <li style={{ textAlign: "center" }}>No items found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
