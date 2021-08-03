<template>
    <div class="detail">
        <h1>{{book.title}}</h1>
        <img v-bind:src="books.cover" class="poster">
            <section>
                <dl class="info">
                    <p>작가</p>
                    <dd>{{books.author}}</dd>
                    <p>번역가</p>
                    <dd>{{books.translator}}</dd>
                    <p>페이지</p>
                    <dd>{{books.page}}</dd>
                </dl>
            </section>
            <section>
                <h2>줄거리</h2>
                <p v-html="books.info" class="synopsis"></p>
            </section>
            <router-link :to="{ name: 'index', params: { id: books.bookId }}" class="link">돌아가기</router-link>
        </div>
</template>
<script>
        export default {
            created: function () {
                var id = this.$route.params.id;
                this
                    .$http
                    .get('/api/books/' + id)
                    .then((response) => {
                        this.books = response.data[0]
                    })
            },
            data: function () {
                return {books: {}}
            }
        }
</script>