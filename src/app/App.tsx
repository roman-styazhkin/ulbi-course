import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { HomePage } from "pages/HomePage";
import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} type="button">Toggle</button>
            <Link to={'/'}>Link to home page</Link>
            <Link to={'/about'}>Link to about page</Link>

            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/about"
                    element={<AboutPage />}
                />
            </Routes>
        </div>
    );
};

export default App;