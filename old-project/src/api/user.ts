import request from '@/libs/request'
import type { ResponsePageableData } from '@/libs/request'

/** 用户登陆 */
export const login = (data?) => request({ url: '/indexapi/User/login', data })

/** 获取用户信息 */
export const getDetail = (data?, show_error = true) =>
	request({ url: '/indexapi/User/getDetail', data, throw_service_failed: show_error })
