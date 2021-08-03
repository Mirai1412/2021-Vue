<template>
    <div id="app">
        <!-- <h1>Welcome{{$store.state.userId}}</h1> <input v-model="newId" type="text">
        <button @click="updateUserId">Save</button> <br> <button
        @click="updateReviews">Update</button>
        <h1>{{$store.getters['reviews/reviewCount']}}</h1> <ul> <li v-for="r in
        $store.state.reviews.reviews" :key="r.id"> <p>{{r.body}}</p> </li> </ul> -->
        <h1>Welcome
            {{userId}}
        </h1>
        <input v-model="newId" type="text">
        <button @click="saveUserId">Save</button>
        <br>
        <button @click="updateReviews">Update</button>
        <h1>{{reviewCount}}</h1>
        <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{r.body}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        data() {
            return {newId: ''}
        },
        computed: {
            ...mapState({
                userId: state => state.userId
            }),
            ...mapState({
                userId: state => state.reviews
            }),
            ...mapGetters('reviews', ['reviewCount'])
        },
        methods: {
            ...mapMutations(['updateUserId']),
            ...mapActions('reviews', ['getReviews']),
            saveUserId() {
                this.updateUserId(this.newId)
            },
            updateReviews() {
                this.getReviews()
            }
        }
    }
</script>