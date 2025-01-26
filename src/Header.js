import {
  DarkModeOutlined,
  Search,
  YouTube as YouTubeIcon
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "./components/DarkModeContext";
import MicSearch from "./components/MicSearch";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const handleSearch = () => {
    if (inputSearch.trim()) {
      navigate(`/search/${inputSearch}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  useEffect(() => {
    console.log(isDarkMode);
  
  }, [isDarkMode])
  

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-dark dark:text-white">
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <YouTubeIcon className="text-red-600" fontSize="large" />
          <span className="text-2xl font-bold text-black">YouTube</span>
        </Link>

        {/* Search Section */}
        <div className="flex items-center w-1/2 max-w-2xl">
          <div className="flex w-full border rounded-full overflow-hidden">
            <input
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button 
              onClick={handleSearch}
              className="px-4 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Search />
            </button>
          </div>
          {/* <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Mic />
          </button> */}
          <MicSearch/>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 transition-colors hidden">
            <DarkModeOutlined />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;