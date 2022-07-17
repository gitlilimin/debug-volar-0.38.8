import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: "views" */ '@/views/home.vue'),
	},
]

export default routes
