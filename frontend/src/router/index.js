import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/booksindex'
import Show from '@/components/bookshow'
Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/:id',
            name: 'show',
            component: Show
        }
    ]
})