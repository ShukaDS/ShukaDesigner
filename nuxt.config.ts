import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    //dev: true,
    //ignoreOptions: {
    //    ignorecase: false
    //},
    buildModules: [
        // pinia plugin - https://pinia.esm.dev
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
