import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div className="content-page">
            <h1>{t('Страница о нас')}</h1>
        </div>
    );
};

export default AboutPage;