import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        }
        
    ],
})

export default router