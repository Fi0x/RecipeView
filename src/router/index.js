import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/search.vue'
import Recipe from '../components/recipeview.vue'
import Home from '../components/carousel.vue'
import Err from '../components/errorpage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            name: 'Error',
            component: Err
        },
        {
            path: '/recipe',
            name: 'Recipe',
            component: Recipe
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
})