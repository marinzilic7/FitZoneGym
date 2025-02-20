export default defineNuxtConfig({
  app:{
    head:{
      title:"FitZone", 
      link:[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap'
        }
      ]
    }
  },
  css: [ "bootstrap/dist/css/bootstrap.min.css","@/assets/styles.scss",],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
