import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import(/* webpackChunkName: "about" */ '../views/Input.vue')
  }
]

const router = new VueRouter({
  routes
})

console.log(process.env);

// axios を require してインスタンスを生成する
const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: 'http://localhost:4000', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + process.env.VUE_APP_API_KEY
  },
  responseType: 'json'  
});

axios.get("https://api.airtable.com/v0/" + process.env.VUE_APP_BASE_ID + "/memo").then(function(response) {
  console.log(response)
}).catch(function(error) { // eslint-disable-line
  console.log('ERROR!! occurred in Backend.')
});

export default router
