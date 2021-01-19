import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/search.vue'
import Recipe from '../components/recipeview.vue'
import Home from '../components/carousel.vue'
import Err from '../components/errorpage.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            name: 'Error',
            component: Err
        },
        {
            path: '/recipe/:id',
            name: 'Recipe',
            component: Recipe,
            props: true,
        },
        {
            path: '/:type/:key',
            name: 'Search',
            component: Search,
            props: true,
        }
    ]
})