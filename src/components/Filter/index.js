import React, { useState } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';

import { Container } from './styles';

export default function Filter() {
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.length) {
      setSearching(!searching);
    }
  };

  const handleResetSearch = () => {
    setSearching(!searching);
    setSearchText('');
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  return (
    <Container>
      <div>
        <input
          type="text"
          placeholder="Buscar post"
          value={searchText}
          onChange={(e) => handleSearchText(e.target.value)}
        />
        {searching === false ? (
          <MdSearch size={15} color="#cfe0ed" />
        ) : (
          <MdClose size={15} color="#ff6434" onClick={handleResetSearch} />
        )}
      </div>
      <button type="button" onClick={handleSearch}>
        Buscar
      </button>
    </Container>
  );
}
