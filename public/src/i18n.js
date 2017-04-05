import en from './static/en.json'

export const config = {
  defaultCode: 'en-GB',
  languages: [
    {
      name: 'English',
      code: 'en-GB',
      urlPrefix: 'en',
      translationKey: 'en'
    }
  ],
  translations: {
    en: en
  }
}

export const proxy = {
  getTranslation: function ({ translationKey }) {
    return fetch(`/static/${translationKey}.js`)
    .then((response) => { return response.json() })
  }
}
