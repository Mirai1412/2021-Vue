let title = new Vue({
    el: '#title',
    data: {
        age: 20,
        address: "https://www.naver.com/",
        todos: [
            {
                text: 'JavaScript 배우기'
            }, {
                text: 'CSS 배우기'
            }, {
                text: 'HTML 배우기'
            }
        ],
        message: {
            greeting: 'Hello',
            name: 'Mirai!'
        },
        user: {
            userid: 'user123',
            name: 'Jane Vue',
            email: 'user123@email.com'
        },
        counter: 0,

        message2: 'Select a user',

        users: [
            {
                name: 'User'
            }, {
                name: 'Admin'
            }
        ],
        comment: '',
        value: false,
        values: [],
        value3: 'hello',
        value4: 'Hi'
    },
    methods: {
        sahHi(name) {
            this.message = 'Hi, ' + name
        },
        appCounter() {
            this.counter += 1
        },
        MinusCounter() {
            this.counter -= 1
        }

    }
});
