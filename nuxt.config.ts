import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    css: ["@/assets/css/tailwind.css"],
    colorMode: {
        classSuffix: ''
    },
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: null,
        injectPosition: 0,
        viewer: true,
    },
})
