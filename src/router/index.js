import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Desktop from '../views/Desktop.vue'
import Document from '../views/Document.vue'
import Information from '../views/Information.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'


Vue.use(Router);

  export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'inicio',
        component: Main, 
      },
      {
        path: '/Desktop/:Nombre?',
        name: 'desktop',
        component: Desktop,
        children: [
          // this will be rendered inside component´s <router-view>
          { path: '/Profile',name:'desktop.profile' ,component: Profile },
          { path: '/Document',name:'desktop.document' ,component: Document },
        ]
      },
      {
        path: '/Information',
        name: 'information',
        component: Information, 
      },
      {
        path: '/Login',
        name: 'login',
        component: Login, 
      },
    ]
  }
  )