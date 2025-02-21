export default defineNuxtConfig({
  app: {
    head: {
      title: "FitZone",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/styles.scss",
    "aos/dist/aos.css",
  ],
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    { src: "~/plugins/aos.js", mode: "client" },
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
