import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import cls from "widgets/Sidebar/ui/Sidebar/Sidebar.module.scss";

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={cls.lang}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            type="button"
        >
            {t('Язык')}
        </Button>
    );
};
