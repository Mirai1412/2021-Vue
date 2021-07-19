Vue.component('comments', {
    template: `
    <div>
    작성자 : <input type="text" v-model="user"> 
    내용 : <input type="text" v-model="comment">
    <button @click="save">저장</button>
    <h1>출력</h1>
    <ul>
    <li v-for="msg in messages"> 
    <p> {{ msg.user }} : {{ msg.comment }} </p>
    </li>
    </ul>
    </div>`,
    data() {
        return{
        user: null,
        comment: null,
        messages: []
        }
    },
    methods: {
        save() {

            const message = {
                user: this.user,
                comment: this.comment
            };

            this
                .messages
                .unshift(message)
            this.user = null
            this.comment = null
        }
    }

});

let text = new Vue({
    el: '#text',
    data: {
        // user: null,
        // comment: null,
        // messages: []
    },
    methods: {
        // save() {

        //     const message = {
        //         user: this.user,
        //         comment: this.comment
        //     };

        //     this
        //         .messages
        //         .unshift(message)
        //     this.user = null
        //     this.comment = null
        // }
    }

});