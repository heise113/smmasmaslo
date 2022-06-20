import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './en';
import ru from './ru';

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en: { ...en },
            ru: { ...ru },
        },
        lng: Localization.locale,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });