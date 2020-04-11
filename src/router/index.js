import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router'
import App from '../App.vue'
Vue.use(VueRouter);

// const Index = resolve => require(['../Index.vue'], resolve);
const Home = resolve => require(['../views/Home.vue'], resolve);
const Publish = resolve => require(['../views/Publish.vue'], resolve);
const Message = resolve => require(['../views/Message.vue'], resolve);
const More = resolve => require(['../views/More.vue'], resolve);
const Topic = resolve => require(['../views/Topic.vue'], resolve);
const User = resolve => require(['../views/User.vue'], resolve);
export default new VueRouter({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/more',
      name: 'More',
      component: More,
    },
    {
      path:'/topic/:id',
      name:'Topic',
      component: Topic
    },
    {
      path:'/user/:loginname',
      name:'User',
      component:User
    },
    {
      path:'*',
      name:'All',
      component:Home
    }
  ]
})
