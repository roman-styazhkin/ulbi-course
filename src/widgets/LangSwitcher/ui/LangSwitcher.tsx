import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      type="button"
    >
      {t('Язык')}
    </Button>
  );
};
