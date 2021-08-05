<template>
    <div class="app">
        <!-- <p>{{this.$route.params.book_id}}</p> -->
        <h1> {{ books.title }}</h1>
        <img v-bind:src="books.cover" class="poster">
        <p>작가: {{ books.author }},번역 : {{ books.translator }}</p>
        <p>페이지: {{ books.page }},가격 : {{ books.price }}, ISBN : {{ books.ISBN }}</p>
        <p>{{ books.info}}</p>
        <router-link to="/book">돌아가기</router-link>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {books:{}}
        },
        mounted()  {
            var id = this.$route.params.book_id;
                axios
                .get(`/api/books/${id}`)
                .then((response) => {
                    this.books = response.data
                    console.log(response)
                })
        }
    }
</script>