import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    ssr: true,
    // nitro: {
    //     preset: 'server',
    //     timing: false
    // },
    // dev: true,

    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                { src: 'https://awesome-lib.js' }
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                { rel: 'stylesheet', href: 'https://awesome-lib.css' }
            ],
            // please note that this is an area that is likely to change
            // style: [
            //     // <style type="text/css">:root { color: red }</style>
            //     { children: ':root { color: red }', type: 'text/css' }
            // ]
        }
    },


    buildModules: [
        ['@pinia/nuxt']
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },

    build: {
        transpile: ['@heroicons/vue']
    },
    // build: {
    //     postcss: {
    //         postcssOptions: {
    //             plugins: {
    //                 tailwindcss: {},
    //                 autoprefixer: {},
    //             }
    //         }
    //     },
    // },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    }

    /* options for vite */
    // ssr: false, // enable unstable server-side rendering for development (false by default)
    // experimentWarning: true, // hide experimental warning message (disabled by default for tests)


})
