import i18n from 'i18next';
// import en from './en.json';
// import de from './de.json';


i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "hello_world": "hello world"
      }
    },
    ru: {
      translation: {
        "hello_world": "hello welt"
      }
    }
  }
})

export default i18n
