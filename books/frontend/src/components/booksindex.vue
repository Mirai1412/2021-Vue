<template>
    <div class="app">
        <ul class="book" style="padding: 5px; ">
            <li v-for="book in books" class="item" :key="book.bookId">
                <v-card class="mx-auto" style="width: 450px;">
                    <img v-bind:src="book.cover" class="poster">
                        <router-link :to="bookLink(book.bookId)">
                            <v-card-title style="height: 80px; ">
                                {{ book.title }}
                            </v-card-title>
                    </router-link>
                        <v-card-subtitle style=" padding: 0px 0 10px 16px; ">
                            {{ book.author }}
                        </v-card-subtitle>
                    </v-card>

                </li>
            </ul>

        </div>
</template>

    <script>
        import axios from 'axios'

        export default {
            data() {
                return { books: [] }
            },
            mounted() {
                axios.get('/api/books')
                .then((response) => {
                        this.books = response.data
                    })
                .catch(err=>{
                    console.log(err)
                })
            },
            methods: {
                bookLink(book_id){
                    return `/book/${book_id}`

                }
            }
        }
    </script>
    <style>
        ul {
            margin: 0 auto;
            list-style: none;
        }

        img {
            width: 150px;
            height: 220px;
            margin-left: 150px;
        }
        li {
            width: 450px;
            margin: 20px;
            display: inline-block!important;
        }
   
    </style>