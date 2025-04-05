import {Link, LinkProps} from "react-router-dom";
import {FC, ReactNode} from "react";
import {classNames} from "shared/classNames/classNames";
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}
interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            { children }
        </Link>
    );
};
