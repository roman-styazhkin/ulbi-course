import {FC} from "react";
import {classNames} from "shared/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import cls from './Navbar.module.scss';

interface NavbarProps {
 className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className="container">
                <div className={cls.navbarInner}>
                    <ThemeSwitcher className={cls.themeSwitcher} />
                    <AppLink to={'/'} theme={AppLinkTheme.INVERTED}>Link to home page</AppLink>
                    <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>Link to about page</AppLink>
                </div>
            </div>
        </div>
    );
};
