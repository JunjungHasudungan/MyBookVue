import { createRouter, createWebHistory } from "vue-router";
import { ref, onMounted } from "vue";
import PostIndex from '../views/PostIndex.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Counter from '../views/Counter.vue';
import SimpleForm from '../views/SimpleForm.vue';
import PostEdit from '../views/PostEdit.vue';

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
        path: "/counter",
        name: 'Counter',
        component: Counter,
        meta: {
            title: "Counter"
        }  
    },
    { 
        path: "/login", 
        name: 'Login',
        component: Login,
        meta: {
            title: "Login"
        },
    },
    { 
        path: "/register", 
        name: "Register",
        component: Register,
        meta: {
            title: "Register"
        }
    },
    {
        path: "/posts",
        name: "PostIndex",
        component: PostIndex,
        meta: {
            title: "Post"
        },
    },
    {
        path: "/simple-form",
        name: "SimpleForm",
        component: SimpleForm,
        meta: {
            title: "Simple Form"
        }
    },
    {
        path: "/simple-form/:id/edit",
        name: "PostEdit",
        component: PostEdit,
        props: true,
        meta: {
            title: "Edit-Post",
        }
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