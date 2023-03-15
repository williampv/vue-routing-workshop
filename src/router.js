import { createRouter, createWebHashHistory } from "vue-router";

import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

const routes = [

    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router