import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // Toggles the dark mode state flag on click
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button 
      onClick={handleToggle}
      className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 shadow-xs cursor-pointer border ${
        darkMode
          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-yellow-400'
          : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
      }`}
    >
      {/* Updates text dynamically based on current darkMode state */}
      {darkMode ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
