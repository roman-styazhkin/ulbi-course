import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";
import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {selected: false, toggled: true}, ['add1'])}>
            <button onClick={toggleTheme} type="button">Toggle</button>
            <Link to={'/'}>Link to home page</Link>
            <Link to={'/about'}>Link to about page</Link>

            <Routes>
                <Route
                    path="/"
                    element={<HomePageAsync />}
                />
                <Route
                    path="/about"
                    element={<AboutPageAsync />}
                />
            </Routes>
        </div>
    );
};

export default App;