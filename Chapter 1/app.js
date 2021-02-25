// const app = Vue.createApp({
//     data() {
//         return {
//             showBooks: true,
//             title: 'The Final Empire',
//             author: 'Brandon Sanderson',
//             age: 45,
//             x: 0,
//             y: 0
//         }
//     },
//     methods: {
//         changeTitle(title) {
//             // this.title = 'Words of Radiance'
//             this.title = title
//         },
//         toggleShowBooks() {
//             this.showBooks = !this.showBooks // sets to opposite of current state
//         },
//         handleEvent(event, data) { // data = 5
//             console.log(event, event.type)
//             if(data) {
//                 console.log(data)
//             }
//         },
//         handleMousemove(event) {
//             this.x = event.offsetX
//             this.y = event.offsetY
//         }
//     }
// })

const app = Vue.createApp({
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks // sets to opposite of current state
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')