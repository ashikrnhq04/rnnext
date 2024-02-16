import { useContext, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import useDBounceInSearch from "../hooks/useSearchInBouce";
import { NewsContext } from "../context";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

function Header({ clickMenu }) {
  let [enableSearch, setEnableSearch] = useState(false);

  const searchRef = useRef();

  const { setQueryTerm } = useContext(NewsContext);
  const searchNews = useDBounceInSearch((term) => {
    setQueryTerm((prevTerm) => ({
      ...prevTerm,
      term: term,
      type: "search",
    }));
  }, 1000);

  function handleSearchClick() {
    setEnableSearch((s) => !s);
  }

  function handleChange(e) {
    // setSearchTerm(e.target.value);
    searchNews(e.target.value);
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      searchRef.current?.focus();
    }
    return () => {
      ignore = true;
    };
  }, [enableSearch]);

  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <div className='container mx-auto flex items-center justify-between gap-6'>
        <div className='flex items-center space-x-4 w-full'>
          <CiGlobe color='#00D991' />
          <span>Thursday, February 25, 2021</span>
        </div>
        <a href='/' className='w-full flex items-center justify-center'>
          <Logo />
        </a>

        <div className='flex items-center justify-end space-x-3 lg:space-x-8 w-full'>
          {enableSearch && (
            <input
              ref={searchRef}
              onChange={handleChange}
              className='p-2 animate-[slideIn_1s_ease-in-out]'
              type='text'
              placeholder='Search...'
            />
          )}
          <span className='cursor-pointer' onClick={handleSearchClick}>
            <CiSearch />
          </span>
        </div>
      </div>

      <div className='container mx-auto mt-6'>
        <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
          {categories.map((item) => (
            <li
              onClick={() => clickMenu(item)}
              className='cursor-pointer'
              key={item}>
              <span className='capitalize'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
