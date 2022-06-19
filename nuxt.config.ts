import {defineNuxtConfig} from 'nuxt'

console.log('NODE_ENV -> ' + process.env.NODE_ENV);

let Config

if (process.env.NODE_ENV === 'production') {
    Config = defineNuxtConfig({
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
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                ],
                script: [
                    // <script src="https://myawesome-lib.js"></script>
                    {src: 'https://awesome-lib.js'}
                ],
                link: [
                    // <link rel="stylesheet" href="https://myawesome-lib.css">
                    {rel: 'stylesheet', href: 'https://awesome-lib.css'}
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

        plugins: [
            { src: `~plugins/vimeo-player` }
        ],
        build: {
            vendor: [
                'vue-vimeo-player'
            ],
            transpile: ['@heroicons/vue']
        },

        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            }
        }

    })
} else {
    Config = defineNuxtConfig({
        ssr: true,

        // nitro: {
        //     preset: 'server',
        //     timing: false
        // },

        // dev: true,
        modules: [
            '@vueuse/nuxt',
        ],

        app: {
            head: {
                meta: [
                    // <meta name="viewport" content="width=device-width, initial-scale=1">
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                ],
                script: [
                    // <script src="https://myawesome-lib.js"></script>
                    {src: 'https://awesome-lib.js'}
                ],
                link: [
                    // <link rel="stylesheet" href="https://myawesome-lib.css">
                    {rel: 'stylesheet', href: 'https://awesome-lib.css'}
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

        // build: {
        //     transpile: ['@heroicons/vue']
        // },

        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            }
        }

    })
}

export default Config
