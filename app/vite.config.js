import path from 'path';
import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

// import ElementPlus from 'unplugin-element-plus/vite';

// TODO:在vitepress使用该插件进行element-plus的按需导入会导致编译错误
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../dist'),
    cssCodeSplit: true,
  },
  publicDir: path.resolve(__dirname, './.vitepress/public'),
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './.vitepress/src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // additionalData: `@use "@/shared/styles/element-var.scss" as *;`,
      },
    },
  },
  plugins: [
    vueJsx({}),
    Icons({
      compiler: 'vue3',
      customCollections: {
        app: FileSystemIconLoader(
          path.resolve(__dirname, './.vitepress/src/assets/svg-icons')
        ),
        mooc: FileSystemIconLoader(
          path.resolve(__dirname, './.vitepress/src/assets/category/mooc')
        ),
        footer: FileSystemIconLoader(
          path.resolve(__dirname, './.vitepress/src/assets/common/footer')
        ),
      },
    }),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),

    // ElementPlus({
    //   useSource: true,
    // }),
  ],
  server: {
    proxy: {
      '/api-easyeditor/': {
        target: 'https://easyeditor.openeuler.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-easyeditor/, ''),
      },
      '/compatibility/': {
        target: 'https://api-proxy.openeuler.isrc.ac.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/compatibility/, ''),
      },
      '/certification/': {
        target: 'https://openeuler.shanhaitujian.cn/',
        changeOrigin: true,
      },
      '/api-search': {
        target: 'https://doc-search.openeuler.org/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-search/, ''),
      },
      '/api-meeting/': {
        target: 'https://meetings.openeuler.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-meeting/, ''),
      },
      '/api/': {
        target: 'https://api.openeuler.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api-euler': {
        target: 'https://www.openeuler.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-euler/, ''),
      },
      '/api-node/': {
        target: 'https://www.openeuler.org',
        changeOrigin: true,
      },
      '/api-omapi/': {
        target: 'https://omapi.osinfra.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-omapi/, ''),
      },
      '/api-mail/': {
        target: 'https://mailweb.openeuler.org/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-mail/, ''),
      },
      '/ip-api/': {
        target: 'http://ip-api.com/json/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ip-api/, ''),
      },
      '/api-certification/': {
        target: 'https://ccs.openeuler.org/ccs/base/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-certification/, ''),
      },
    },
  },
});
