import { createRouter, createWebHistory } from "vue-router";
import { ref, onMounted } from "vue";

import Home from '../components/Home.vue'

const routes = [
    { 
        path: "/", 
        name: 'Home',
        component: Home,
        meta: {
            title: "Home"
        }
    },
    { 
        path: "/login", 
        name: 'Login',
        component: () => import("../components/Login.vue"),
        meta: {
            title: "Login"
        },
    },
    { 
        path: "/register", 
        name: "Register",
        component: () => import("../components/Register.vue"),
        meta: {
            title: "Register"
        }
    },
    {
        path: "/posts",
        name: "PostIndex",
        component: () => import("../components/pages/posts/PostIndex.vue"),
        meta: {
            title: "Post"
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const appName = ref('MyBook');


router.beforeEach( (to, from, next) => {
    document.title = `${to.meta.title} | ${appName.value }`;
    next();
});

export default router;