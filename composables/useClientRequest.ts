type FetchType = typeof $fetch
export type FetchOptions = Parameters<FetchType>[1]

export const useClientRequest = <T = unknown>(data: { url: string; opts?: FetchOptions; isToken: boolean }) => {
  const token = useCookie<string | undefined>('token')
  const runtimeConfig = useRuntimeConfig()

  const defaultOptions: FetchOptions = {
    onRequest({ options }) {
      if (data.url.indexOf('http') !== 0) options.baseURL = data?.opts?.baseURL?.toString() || runtimeConfig.public.api.baseUrl
      options.headers = new Headers(options.headers)

      // 添加请求头,没登录不携带token
      const isToken = data.isToken || false
      if (isToken) options.headers.set('Authorization', `Bearer ${token.value}`)
      options.params = paramsSerializer(data.opts.params)
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

  return $fetch<T>(data.url, { ...defaultOptions, ...data.opts })
}
