import { createRouter, createWebHashHistory } from "vue-router";

import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
import ErrorNotFound from './components/404.vue';
import Home from './components/Home.vue'

const routes = [

    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/:pathMatch(.*)*', component: ErrorNotFound }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router