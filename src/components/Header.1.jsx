import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { categories } from "./Header";

export function Header({ clickMenu }) {
  let [enableSearch, setEnableSearch] = useState(false);

  let searchRef = useRef(null);

  function handleSearchClick() {
    setEnableSearch((s) => !s);
  }

  useEffect(() => {
    searchRef.current.focus();
  }, [enableSearch]);

  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
        <div className='flex items-center space-x-4'>
          <CiGlobe color='#00D991' />
          <span>Thursday, February 25, 2021</span>
        </div>
        <a href='/'>
          <Logo />
        </a>

        <div className='flex items-center space-x-3 lg:space-x-8 cursor-pointer'>
          {enableSearch && (
            <input
              ref={searchRef}
              className='p-2'
              type='text'
              placeholder='Search...'
            />
          )}
          <span onClick={handleSearchClick}>
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
