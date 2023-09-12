import {
  DarkModeOutlined,
  Mic,
  Search
} from "@mui/icons-material/";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  // const [listOpen,setListOpen] = useState(false);
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") navigate(`/search/${inputSearch}`);
    console.log(e.key);
    setInputSearch(e.target.value);
  };

  // const handleSidebar = (e)=>{
  //   setListOpen(!listOpen);
  // }

  return (
    <div className="header flex flex-row justify-between p-5 pt-2 items-center z-10 sticky top-0 bg-white">
      <div className="headerLeft flex mt-[-8px]">
        <Link to="/">
          <div className="flex items-center w-fit m-auto">
            {/* <MenuOutlined onClick={e =>handleSidebar(e)}/> */}
            {/* <img src="https://media.giphy.com/media/9OlDLk3T6TeIsR1AE1/giphy.gif" alt="" width='40px' /> */}
            <div className="w-20 h-16 flex justify-start">
              <iframe
                src="https://giphy.com/embed/9OlDLk3T6TeIsR1AE1"
                width="100%"
                height="100%"
                className="p-0 m-0"
                title="YouTube"
              ></iframe>
              <p className="tracking-tighter font-roboto text-2xl font-normal my-auto -mx-6">
                YouTube
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center w-[50%]">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          type="text"
          placeholder="Search"
          className="rounded-l-3xl w-[80%] px-2 border-2 py-2 focus:border-blue-400 focus:outline-none focus:border-1"
        />
        <Link to={`/search/${inputSearch}`}>
          <button className="px-5 py-[6.9px] border-2 border-l-0 rounded-r-3xl bg-[#f8f8f8]">
            <Search />
          </button>
        </Link>
        <button className="bg-[#f2f2f2] rounded-3xl px-2 py-2 ml-3">
          <Mic />
        </button>
      </div>
      <div className="headerRight">
        <button className="bg-[#f2f2f2] rounded-full p-2"><DarkModeOutlined/></button>
      </div>
    </div>
  );
};

export default Header;
