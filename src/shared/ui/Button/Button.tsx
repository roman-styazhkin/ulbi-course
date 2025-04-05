import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import {classNames} from "shared/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR= 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
