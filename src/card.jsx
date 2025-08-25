import {useState,  useEffect} from 'react'

export default function Card() {
    
    const[dakrMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);
        
    }
    return (

        <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg" alt="avatar" className="w-20 h-20 rounded-full w-32 h-32 mx-auto" />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">ANA GOMEZ</h2>
            <p className="mt-2 text-gray-600 text-center">Desarroladora Front-End apasionada por React y el diseño UI/UX</p>
            <button onClick={toggleTheme} className={`mt-4 px-4 py-2 rounded ${darkMode ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800 duration-300'}`}></button>
        </div>
    );    