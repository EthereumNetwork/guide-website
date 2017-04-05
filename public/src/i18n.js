import en from './static/en.json'

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
    return fetch(`/src/static/${translationKey}.json`)
    .then((response) => {
      return response.json()
    })
  }
}
