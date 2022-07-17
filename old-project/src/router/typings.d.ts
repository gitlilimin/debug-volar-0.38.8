import 'vue-router'

/**
 * 定义路由元信息类型
 */
declare module 'vue-router' {
	interface RouteMeta {
		/**
		 * 标题
		 * @description 如果设置title，router守卫会据此来设置网页的title，undefined则不处理
		 */
		title?: string | number
	}
}
