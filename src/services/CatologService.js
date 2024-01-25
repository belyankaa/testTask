export class CatologService {

    //Это имитация запросов на backend

    static getProducts() {
        return [
            {
                id: 1,
                name: 'Кактус',
                price: '500',
                image: 'flower1.png'
            },
            {
                id: 2,
                name: 'Роза',
                price: '250',
                image: 'flower2.png'
            },
            {
                id: 3,
                name: 'Цветок',
                price: '300',
                image: 'flower3.png'
            },
            {
                id: 4,
                name: 'Ромашка',
                price: '400',
                image: 'flower4.png'
            },
            {
                id: 5,
                name: 'Архидея',
                price: '125',
                image: 'flower5.png'
            },
            {
                id: 6,
                name: 'Цветочек',
                price: '700',
                image: 'flower6.png'
            },
            {
                id: 7,
                name: 'Паприка',
                price: '567',
                image: 'flower7.png'
            },
        ]
    }
    static getCartProducts() {
        if (localStorage.getItem('products') === null) {
            return []
        }
        return JSON.parse(localStorage.getItem('products'));
    }
}
