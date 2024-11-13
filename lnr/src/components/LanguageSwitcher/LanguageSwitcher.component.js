import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('lv')}>Latviešu</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
    );
}

export default LanguageSwitcher;
