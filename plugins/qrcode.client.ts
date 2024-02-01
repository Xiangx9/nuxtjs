// https://github.com/gexin1/beautify-qrcode/
import * as qrcode from 'beautify-qrcode'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: { ...qrcode }
  }
})
