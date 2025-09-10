import { useState } from 'react';
import { setTheme, getPreferredTheme } from './utils/theme';

const Footer = () => {
  const preferredTheme = getPreferredTheme();
  const [currentTheme, setCurrentTheme] = useState(preferredTheme);

  const toggleTheme = () => {
    const newTheme = preferredTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <footer className='d-flex flex-wrap py-3 mt-4 border-top'>
      <div className='d-flex align-items-center me-auto'>
        <span className='text-body-secondary'>
          © {new Date().getFullYear()} Pierre Villette
        </span>
      </div>

      <div className='d-flex align-items-center'>
        ☼
        <div className='mb-0 ms-2 form-check form-switch'>
          <input
            onClick={toggleTheme}
            className='form-check-input'
            id='theme-switch'
            type='checkbox'
            role='switch'
            checked={currentTheme === 'dark'} />
        </div>
        ☾
      </div>
    </footer>
  );
};

export default Footer;
