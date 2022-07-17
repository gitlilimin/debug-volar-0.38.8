import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		/** 应用名称 */
		name: 'old-project',
		/** 应用版本 */
		version: '1.0.0',
		/** 屏幕尺寸 */
		screen: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
	}),
	actions: {
		updateScreen() {
			this.screen = {
				width: window.innerWidth,
				height: window.innerHeight,
			}
		},
	},
})

window.addEventListener('resize', () => {
	const appStore = useAppStore()
	appStore.updateScreen()
})
