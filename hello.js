let app = new Vue({
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
        user:{
            userid:'user123',
            name:'Jane Vue',
            email:'user123@email.com'
        }
    }
});
