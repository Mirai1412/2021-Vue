<template>
    <div id="app">
        <h1>Welcome
            {{ $store.state.user.userId }}</h1>
        <v-text-field
            v-model="newId"
            label="Main input"
            :rules="rules"
            hide-details="auto"></v-text-field>
            <br>
        <v-btn elevation="2" @click="saveUserId">Save</v-btn><br>
        <br>
            <v-btn elevation="2" @click="updateReviews">Update</v-btn>
            <h1>{{reviewCount}}</h1>
            <ul>
                <li v-for="r in reviews" :key="r.id">
                    <p>{{r.body}}</p>
                </li>
            </ul>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in $store.state.reviews.reviews" :key="item.id">
                            <td>{{item.name}}</td>
                            <td>{{item.body}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
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
    <style scoped="scoped">
        h1 {
            text-align: center;
        }

      
    </style>