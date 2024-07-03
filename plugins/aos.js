import AOS from "aos"
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.AOS = AOS.init({
      // Di sini Anda bisa menambahkan opsi konfigurasi AOS
      duration: 800,
      easing: "slide",
    })
  }
})