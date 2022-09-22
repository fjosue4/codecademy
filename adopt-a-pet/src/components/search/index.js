import React, { useRef, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// import useHistory here.

const Search = () => {

  // get the history object here
  const history = useHistory();
  const { search } = useLocation();
  const queryParams = useMemo(() => { 
    return new URLSearchParams(search)
  }, [search])

  useEffect
  queryParamsObject.get(petNameToFind);

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with history.push()
    history.push('/search?' + searchQuery);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
