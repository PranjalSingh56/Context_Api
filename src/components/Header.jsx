import { useAppContext } from "../context/AppContext";

 const Header =()=> {
    const { user, theme, toggleTheme } = useAppContext();

    return (
        <header
            style={{
                padding: 20,
                background: theme === "light" ? "#eee" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <h2>Welcome, {user}</h2>
            
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}

export default Header;