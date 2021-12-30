import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
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
    // ssr: false, // enable unstable server-side rendering for development (false by default)
    // experimentWarning: true, // hide experimental warning message (disabled by default for tests)


})
