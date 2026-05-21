import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle( {theme, toggletheme} ){
    return (
        <button className="themeToggle" onClick={toggletheme}>{
            theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default ThemeToggle