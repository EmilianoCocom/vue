
// import vue-router
import {createRouter, createWebHistory} from 'vue-router'

// import components
import Dashboard from './components/Dashboard'
import Blogs from './views/blogs/Index'

// routes
const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard
    },
    {
        name: 'blogs',
        path: '/blogs',
        component: Blogs
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
