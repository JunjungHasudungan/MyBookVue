import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
// import Login from '../components/Login.vue'
// import Register from '../components/Register.vue'

const routes = [
    { 
        path: "/", 
        name: 'Home',
        component: Home 
    },
    { 
        path: "/login", 
        name: 'Login',
        component: () => import("../components/Login.vue") 
    },
    { 
        path: "/register", 
        name: "Register",
        component: () => import("../components/Register.vue") 
    },
    {
        path: "/posts",
        name: "PostIndex",
        component: () => import("../components/pages/posts/PostIndex.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;