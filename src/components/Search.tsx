// Search.tsx

import React, { useState } from 'react';
import type { Doc } from 'src/types/api';

interface SearchProps {
  setFilteredLaunches: React.Dispatch<React.SetStateAction<Doc[]>>;
  allLaunches: Doc[];
}

const Search: React.FC<SearchProps> = ({ setFilteredLaunches, allLaunches }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = allLaunches.filter((launch) =>
      launch.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredLaunches(filtered);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Search;
