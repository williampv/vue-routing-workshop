import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
import ErrorNotFound from './components/404.vue';
import Home from './components/Home.vue'

const routes = [

    { path: '/', component: Home },
    { path: '/foo/:id', name: 'Foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/:pathMatch(.*)*', component: ErrorNotFound }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log("hola")
    next()
})

export default router