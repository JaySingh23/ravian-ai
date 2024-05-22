import { useState, forwardRef } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillPhone } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = forwardRef((props, ref) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'About', target: 'about-section' },
    { id: 2, text: 'Offerings', target: 'offerings-section' },
    { id: 3, text: 'Vision', target: 'vision-section' },
    { id: 4, text: 'Contact', target: 'cta-section' },
  ];

  return (
    <div ref={ref} className='bg-black flex justify-between items-center font-poppins h-24 mx-auto px-4 w-full text-white absolute z-2'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-gray-100'>RAVIAN AI</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to={item.target} smooth={true} duration={500}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <button className="rounded-full bg-gray-100 px-5 py-3 text-base font-medium text-black transition duration-200 hover:shadow-sm hover:shadow-white w-32 sm:w-52 hidden md:flex">
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
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-30' 
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-white m-4'>RAVIAN AI</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-sm hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.target} smooth={true} duration={500} onClick={handleNav}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <button
      className="fixed bottom-4 right-4 bg-gray-100 px-4 py-2 rounded-full shadow-md text-gray-800 hover:bg-gray-200 transition duration-300 sm:block"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
      &#9650;
    </button>
    </div>
  );
});

// Adding a display name for better debugging
Navbar.displayName = 'Navbar';

export default Navbar;
