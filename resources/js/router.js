
// import vue-router
import {createRouter, createWebHistory} from 'vue-router'

// import components
import Home from './components/Home'
import Contact from './components/Contact'
import Show from './components/blog/Show'
import Create from './components/blog/Create'
import Edit from './components/blog/Edit'

// routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'show',
        path: '/show',
        component: Show
    },
    {
        name: 'create',
        path: '/create',
        component: Create
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: Edit
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
