import { IconSearch } from "./Icons/IconSearch";

export default function Search() {
    return (
      <div className="flex items-center justify-center">
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full p-2 border-0 rounded-md rounded-r-none focus:ring-0 focus:border-gray-300 placeholder-gray-500"
            placeholder="Search"
          />
          <button className="flex items-center justify-center px-4  border-gray-300 rounded-md rounded-l-none hover:bg-gray-100">
            <IconSearch className="bg-transparent" />
          </button>
        </div>
      </div>

    )
  }