import { useState, forwardRef } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillPhone } from 'react-icons/ai';

const Navbar = forwardRef((props, ref) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'About' },
    { id: 2, text: 'Vision' },
    { id: 3, text: 'Offerings' },
    { id: 4, text: 'Contact' },
  ];

  return (
    <div ref={ref} className='bg-black flex justify-between items-center h-24 mx-auto px-4 w-full text-white absolute z-2'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-gray-100'>RAVIAN AI</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      <button className="rounded-full bg-gray-100 px-5 py-3 text-base font-medium text-black transition duration-200 hover:shadow-sm hover:shadow-white w-32 sm:w-48 hidden md:flex">
        Get in Touch
      </button>

      <div className='block md:hidden m-4'>
        <AiFillPhone size={20} /> 
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-30' 
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-white m-4'>RAVIAN AI</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
});

// Adding a display name for better debugging
Navbar.displayName = 'Navbar';

export default Navbar;
