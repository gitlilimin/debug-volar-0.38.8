/// <reference types="vite/client" />
// 定义env中的变量
interface ImportMetaEnv {
	VITE_APP_VERSION: string
	VITE_APP_BUILD_EPOCH: any

	VITE_API_BASE_URL: string
	VITE_STORAGE_PREFIX: string
	VITE_ICONFONT_URL: string
	VITE_AMAP_KEY: string
}

// 定义window上挂载的变量
interface Window {
	CONFIG: any
}
