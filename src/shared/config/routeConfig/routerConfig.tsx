import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePaths = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about',
};

export const AppRouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <HomePage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
};
