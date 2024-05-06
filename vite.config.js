
import { resolve } from 'path';


export default {
    build: {
        rollupOptions: {
            input: {
                config: resolve(__dirname, 'vercel.json'),
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/page.html'),
                female: resolve(__dirname, 'pages/female.html'),
                male: resolve(__dirname, 'pages/male.html'),
                children: resolve(__dirname, 'pages/children.html'),
                service: resolve(__dirname, 'pages/service.html'),
                giftCard: resolve(__dirname, 'pages/gift_card.html'),
                products: resolve(__dirname, 'pages/products.html'),
                contact: resolve(__dirname, 'pages/contact.html'),
            }
        }
    }
}

