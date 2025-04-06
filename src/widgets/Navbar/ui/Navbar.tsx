import { FC } from 'react';
import { classNames } from 'shared/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routerConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
 className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className="container">
        <div className={cls.navbarInner}>
          <ThemeSwitcher className={cls.themeSwitcher} />
          <AppLink to={RoutePaths[AppRoutes.MAIN]} theme={AppLinkTheme.INVERTED}>{ t('Link to home page') }</AppLink>
          <AppLink to={RoutePaths[AppRoutes.ABOUT]} theme={AppLinkTheme.INVERTED}>{ t('Link to about page') }</AppLink>
        </div>
      </div>
    </div>
  );
};
