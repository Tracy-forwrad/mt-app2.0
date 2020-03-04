import Vue from 'vue'
import Router from 'vue-router'
import commonPage from '@/layout/common'
import defaultPage from '@/layout/default'
import login from '@/page/login'
import register from '@/page/register'
import detail from "@/page/goodsDetail"
import index from '@/page/index'
import changeCity from '@/page/changeCity'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'common',
			component: commonPage,
			redirect: '/index',
			children: [{
				path: '/detail/:name',
				name: 'detail',
				component: detail
			}, {
				path: '/',
				name: 'index',
				component: index
			},{
				path: '/changeCity',
				name: 'changeCity',
				component: changeCity,
				}
			]
		},{
			path: '/default',
			name: 'default',
			component: defaultPage,
			children: [{
				path: '/login',
				name: 'login',
				component: login
			}, {
				path: '/register',
				name: 'register',
				component: register
			}]
		},
		
	]
})
