import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import reviews from './reviews'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        reviews
    }
})