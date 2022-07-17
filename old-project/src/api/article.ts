import request from '@/libs/request'
import type { ResponsePageableData } from '@/libs/request'

/** 获取文章列表 */
export const getList = (data?) => request<ResponsePageableData>({ url: '/indexapi/Article/getList', data })

/** 获取文章详情 */
export const getDetail = (data: { id: number | string }) =>
	request<ResponsePageableData>({ url: '/indexapi/Article/getDetail', data })
