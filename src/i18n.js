import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationFR from './locales/fr/translation.json'
import translationFA from './locales/fa/translation.json'

const resources={
    en:{
        translation: translationEN
    },
    fr:{
        translation: translationFR
    },
    fa:{
        translation: translationFA
    }

}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    //  keySeparator:false,
    //  interpolation:{
    //      escapeValue: false
    
})

export default i18n