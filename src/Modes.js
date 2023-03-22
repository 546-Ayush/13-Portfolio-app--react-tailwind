import React, { useState, useEffect } from 'react';

function Modes() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <>
            <div className= 'dark:bg-black h-screen flex flex-col justify-center items-center'>
                <button onClick={handleThemeSwitch} className='bg-green-200 px-3 py-2 rounded-3xl'>
                    Dark Mode
                </button>
            </div>
        </>
    )
}

export default Modes;