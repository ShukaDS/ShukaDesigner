import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    target: 'static',
    dev: true,
    //ignoreOptions: {
    //    ignorecase: false
    //},
    buildModules: [
        ['@pinia/nuxt']
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },

    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)


})
