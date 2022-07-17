import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

/**
 * 全局前置守卫
 */
export const beforeEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	next()
}

/**
 * 全局后守卫
 */
export const afterEach = async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
	// 页面标题
	if (typeof to.meta.title == 'string') document.title = to.meta.title
}
