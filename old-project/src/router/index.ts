import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { beforeEach, afterEach } from './guard'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		}
	},
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
