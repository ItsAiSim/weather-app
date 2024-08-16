import { useState } from 'react';

export default function ThemeToggleBox() {
  const [ darkTheme, toggleTheme ] = useState<boolean>(false);

  function switchTheme() {
    const nextTheme = darkTheme ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme)

    toggleTheme(prevTheme => !prevTheme);
  }

  return (
    <div className="toggle-box">
      <span className="toggle-box-text">Light</span>
      <label className="relative flex items-center  cursor-pointer">
        <input type="checkbox" className="sr-only peer" onClick={switchTheme}></input>
        <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 " />
      </label>
      <span className="toggle-box-text text-gray-600 ">Dark</span>
    </div>
  );
}
