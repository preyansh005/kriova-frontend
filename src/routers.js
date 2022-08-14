import {createWebHistory,createRouter} from 'vue-router'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Reset from './components/Reset.vue'
import SetPassword from './components/SetPassword.vue'
import OtpVerify from './components/OtpVerify.vue'
import Home from './components/Home.vue'

const routes = [
    {
        name: 'Signup',
        path: '/signup',
        component: Signup
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Reset',
        path: '/reset',
        component: Reset
    },
    {
        name: 'SetPassword',
        path: '/set-password',
        component: SetPassword
    },
    {
        name: 'OtpVerify',
        path: '/otp-verify',
        component: OtpVerify
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router