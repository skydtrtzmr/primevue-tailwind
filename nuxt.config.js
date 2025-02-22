const baseUrl = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', '@primevue/nuxt-module'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    experimental: {
        watcher: 'chokidar'
    },
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: []
        },
        esbuild: {
            minifyIdentifiers: false,
            minifyWhitespace: false
        },
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['legacy-js-api'] //@todo
                }
            }
        }
    },
    runtimeConfig: {
        GITHUB_TOKEN: ''
    },
    primevue: {
        options: {
            theme: 'none'
        }
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'Tailwind CSS based Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                { name: 'twitter:title', content: 'Tailwind CSS based Vue UI Component Library' },
                { name: 'twitter:description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Tailwind CSS based Vue UI Component Library' },
                { property: 'og:url', content: 'https://tailwind.primevue.org/' },
                { property: 'og:description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/primevue-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', as: 'font', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ],
            htmlAttrs: {}
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['@/assets/styles/tailwind.css', '@/assets/styles/app/app.scss', '@/assets/styles/demo/flags.css', 'primeicons/primeicons.css'],
    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    devtools: { enabled: false },
    layouts: {
        default: '~/layouts/default.vue'
    }
});
