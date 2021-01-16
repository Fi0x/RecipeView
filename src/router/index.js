import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Search from '../components/search.vue'
import Recipe from '../components/recipeview.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: App
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