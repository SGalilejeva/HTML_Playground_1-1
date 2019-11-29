console.log("Running on my Vue");

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Rcs!',
        secondmessage: "Hello again",
        seen: true,
        seenMsg: "Turn me OFF"
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },

    // methods: {
    //     reverseMessage: function () {
    //         this.message = this.message.split('').reverse().join('')
    //     },
    // toggleSeen: function () {
    //     this.seen = !this.seen;
    //     if (this.seen) {
    //         this.seenMsg = "Turn me OFF!";
    //     }
    //     else {
    //         this.seenMsg = "Turn me On!";
    //     }
    // }
}
// }
// )

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
}))

