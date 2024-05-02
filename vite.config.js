import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/page.html')
            }
        }
    }
}

