console.log("Running on my Vue");

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Rcs!',
        secondmessage: "Hello again",
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

const myval = 42 