const { I18n } = require('i18n')

const i18n = new I18n({
  locales: ['en', 'de'],
  directory: path.join(__dirname, 'locales')
})