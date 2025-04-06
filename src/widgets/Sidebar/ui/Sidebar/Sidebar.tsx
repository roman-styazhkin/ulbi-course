import {FC, useState} from "react";
import {classNames} from "shared/classNames/classNames";
import {LangSwitcher} from "widgets/LangSwitcher";
import cls from './Sidebar.module.scss';
interface SidebarProps {
    className?: string;
}
export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button
                className={cls.toggler}
                onClick={toggleCollapse}
                type="button"
            >
               Toggle
            </button>

            <LangSwitcher />
        </div>
    );
};
