import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    nitro: {
        preset: 'server',
        timing: true
    },
    // dev: true,
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
