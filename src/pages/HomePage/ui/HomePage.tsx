import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation('home');

  return (
    <div className="content-page">
      <h1>{t('Домашняя страница')}</h1>
    </div>
  );
}

export default HomePage;
