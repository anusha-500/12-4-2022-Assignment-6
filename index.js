import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import testque1 from '../components/testque1'
import testque2 from '../components/testque2'
import testque3 from '../components/testque3'


Vue.use(Router)
    const routes=[{
            path:'/',
            name:"HelloWorld",
            component:HelloWorld
        },
        
        {
            path:'/testque1',
            name:"testque1",
            component:testque1
        },

        {
            path:'/testque3',
            name:"testque3",
            component:testque3
        },
        {
            path:'/testque2',
            name:"testque2",
            component:testque2
        },
    ]
    let router=new Router({routes})
    export default router
