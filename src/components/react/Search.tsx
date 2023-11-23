import { IconSearch } from '@components/Icons/IconSearch';
import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      // Aquí puedes ejecutar la lógica de búsqueda
      // Por ejemplo, redireccionar a una página de resultados con el término de búsqueda en la URL
      window.location.href = `/search/${searchTerm}`;
    }
  };

  return (
    <div className="my-4 flex flex-wrap justify-center">
      <form onSubmit={onSubmitSearch} className="flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden">
        <input
          type="seach"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 focus:outline-none border-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 transition duration-300 hover:bg-blue-600 focus:outline-none" type="submit">
        <IconSearch className='flex justify-center w-5'/>
        </button>
      </form>
    </div>
  );
};

export default Search;
