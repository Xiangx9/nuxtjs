import type { UseFetchOptions } from 'nuxt/app'

export const useServerRequest = <T = unknown>(url: string, opts?: UseFetchOptions<T>, meta?: any) => {
  const token = useCookie<string | undefined>('token')
  const runtimeConfig = useRuntimeConfig()

  // Fetch 请求 options
  const defaultOptions: UseFetchOptions<T> = {
    ...opts,
    onRequest({ options }) {
      options.method = opts.method.toString()
      if (url.indexOf('http') !== 0) options.baseURL = opts?.baseURL?.toString() || runtimeConfig.public.api.baseUrl
      options.headers = new Headers(options.headers)
      // 添加请求头,没登录不携带token
      const isToken = meta?.isToken || false
      if (isToken) options.headers.set('Authorization', `Bearer ${token.value}`)
      options.params = paramsSerializer(opts.params)
    },
    onResponse({ request, response, options }) {
      if (response.status === 200) {
        if (response._data) {
          switch (response._data.code) {
            case 401:
              // TODO 登录过期

              return (response._data = null)
            case 500:
              handleError(response)
              return Promise.reject(response)
          }
        }
      }
    },
    onResponseError({ request, response, options }) {
      // console.log(request, response, options)
      handleError(response)
    }
  }

  // 实际请求
  return useFetch<T>(url, { ...defaultOptions } as any)
}
