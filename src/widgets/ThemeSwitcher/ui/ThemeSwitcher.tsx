import {classNames} from "shared/classNames/classNames";
import {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import IconLightTheme from 'shared/assets/icons/theme-light.svg';
import IconDarkTheme from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <IconDarkTheme/> : <IconLightTheme />}
        </Button>
    );
};
