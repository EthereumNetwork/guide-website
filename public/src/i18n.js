import en from './assets/en.json'

export const config = {
  defaultCode: 'en',
  languages: [
    {
      name: 'English',
      code: 'en',
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
    return fetch(`/${translationKey}.json`)
    .then((response) => {
      return response.json()
    })
  }
}
