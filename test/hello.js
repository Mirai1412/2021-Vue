Vue.component('hello', {
    props: ['name'],
    template: '<p>{{message}}</p>',
    data: function () {
        return {
            message: 'hello!, ' + this.name
        }

    }

});
Vue.component('add', {

    template: '<button @click="add">{{count}}</button>',
    data() {
        return {count: 0}
    },
    methods: {
        add() {
            this.count += 1
            this.$emit('event-add', 1);
        }
    }

});

let app = new Vue({
    el: '#app',
    data: {
        age: 20,
        message: '',
        user_id: 'Mirai',
        user_grade: 'Student',
        totalCount: 0
    },
    methods: {
        updateTotal(count){
            this.totalCount += count
        }
    },
    computed: {
        user_info: function () {
            return this.user_id + " : " + this.user_grade
        },
        age_message: function () {

            let str = '성인'
            if (this.age < 19 && this.age > 12) 
                str = '미성년자'
            else if (this.age > 0 && this.age <= 12) 
                str = '유아'
            return str

        }
    },
    components: {
        'local-hello': {
            template: '<p>This is Local component</p>'
        }
    }
});

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
