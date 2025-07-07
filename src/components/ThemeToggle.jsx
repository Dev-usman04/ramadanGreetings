import React from 'react'

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeToggle
