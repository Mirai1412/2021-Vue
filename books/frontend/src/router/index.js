import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/booksindex'
import Show from '@/components/bookshow'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {path:'/book', component:Index},
        {path:'/book/:book_id', component:Show}
        // {
        //     path: '/book',
        //     name: 'index',
        //     component: Index
        // },
        // {
        //     path: '/book/:id',
        //     name: 'show',
        //     component: Show
        // }
    ]
})