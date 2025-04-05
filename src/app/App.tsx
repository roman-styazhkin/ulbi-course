import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import { AppRouter } from "app/providers/router";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;