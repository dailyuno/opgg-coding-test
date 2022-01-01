import webpack from "webpack";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "opgg",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/_global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/skeleton.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-highcharts",
    "@nuxtjs/style-resources",
    ["cookie-universal-nuxt", { alias: "cookiz" }],
    "@nuxtjs/i18n",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimizeCss: {
      cssProcessorOptions: { safe: true },
    },
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: "lodash",
      }),
    ],
    extend(config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: "json",
        use: "yaml-loader",
      });
    },
  },

  styleResources: {
    scss: ["~/assets/style/_variable.scss"],
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        file: "en.yaml",
      },
      {
        name: "Korea",
        code: "ko",
        file: "ko.yaml",
      },
    ],
    defaultLocale: "ko",
    langDir: "~/locales/",
  },
};
