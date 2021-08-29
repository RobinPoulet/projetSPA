import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Suppliers from "@/views/Suppliers.vue";
import Contact from "@/views/Contact.vue"
import Customers from "@/views/Customers.vue"
import Resellers from "@/views/Resellers.vue"
import CustomerFiche from "@/views/CustomerFiche";
import CustomersPage2 from "@/views/CustomersPage2";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/suppliers',
        name: 'Suppliers',
        component: Suppliers
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/customers',
        name: 'Customers',
        component: Customers,
        props: true

    },
    {
        path: '/customers/page2',
        name: 'CustomersPage2',
        component: CustomersPage2,
        props: true
    },
    {
        path: '/resellers',
        name: 'Resellers',
        component: Resellers
    },
    {
        path: '/customers/:id',
        name: 'CustomerFiche',
        component: CustomerFiche,
        props: true
    }
]

const router = new VueRouter({
    routes
})

export default router

