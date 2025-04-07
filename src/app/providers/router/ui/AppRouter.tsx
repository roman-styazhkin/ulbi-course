import { Route, Routes } from 'react-router-dom';
import { AppRouteConfig } from 'shared/config/routeConfig/routerConfig';

const AppRouter = () => (
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

export default AppRouter;
