<template>
    <div class="wrap">
        <ul class="book" style="padding: 5px; ">
            <li v-for="book in books" class="item" :key="book.bookId">

                <v-card class="mx-auto" style="width: 450px;">

                    <img v-bind:src="book.cover" class="poster">
                        <router-link :to="{ name: 'show', params: { id: book.bookId }}">
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
        export default {
            mounted() {
                this
                    .$http
                    .get('/api/books')
                    .then((response) => {
                        this.books = response.data
                    })
            },
            data() {
                return {books: []}
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
        v-card-title {
            margin: 10px, 0 ,10px ,0!important !important;
        }
    </style>