import React, { useEffect, useState } from 'react'

export function useDarkTheme() {

    const[theme, setTheme] = useState('light');
    console.log(theme)
    const toggleTheme = () => {

        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    return [theme, toggleTheme];
}

