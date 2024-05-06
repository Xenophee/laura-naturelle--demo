import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                config: resolve(__dirname, 'vercel.json'),
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/page.html'),
                female: resolve(__dirname, 'pages/female.html'),
                children: resolve(__dirname, 'pages/children.html')
            }
        }
    }
}

