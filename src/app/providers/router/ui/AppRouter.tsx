import {Route, Routes} from "react-router-dom";
import {AppRouteConfig} from "shared/config/routeConfig/routerConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(AppRouteConfig).map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};
