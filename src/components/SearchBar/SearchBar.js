/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useCallback } from 'react';
import './searchbar.scss';
import debounce from 'lodash.debounce';

export function SearchBar({ searchValue, setSearchParams }) {
  const [value, setValue] = useState(searchValue);

  const onSearchClear = () => {
    setValue('');
    setSearchParams({ name: '' });
  };

  const updateSearchValue = useCallback(
    debounce((text) => {
      setSearchParams({ name: text });
    }, 1000),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="search_wrapper">
      <div className="search_icon">
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="currentColor"
            fillOpacity="0.54"
          />
        </svg>
      </div>
      <input
        value={value}
        onChange={onChangeInput}
        placeholder="Filter by name..."
      />
      {value && (
        <button type="button" className="clear_button" onClick={onSearchClear}>
          <svg viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              fill="currentColor"
              d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
