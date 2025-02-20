export default defineNuxtConfig({
  app:{
    head:{
      title:"FitZone", 
    }
  },
  css: ["@/assets/styles.scss", "bootstrap/dist/css/bootstrap.min.css"],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
