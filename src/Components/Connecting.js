import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Services from './Services';
import Portfolio from './Portfolio';


function Connecting() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') { document.documentElement.classList.add('dark'); }
    else { document.documentElement.classList.remove("dark") }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='dark:bg-[#0A1929] dark:text-white'>
      <Navbar modes={handleThemeSwitch} color={theme} />
      <Body />
      <Services />
      <Portfolio />
    </div>
  )
}

export default Connecting;