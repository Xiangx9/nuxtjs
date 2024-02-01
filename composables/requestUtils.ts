export const paramsSerializer = (params: any) => {
  if (!params) return
  const query = cloneDeep(params)
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}

export const handleError = (response) => {
  const toast = useToast()

  toast.add({
    icon: 'i-tabler-face-id-error',
    title: `[${response.code}]`,
    description: response._data.msg,
    timeout: 5000
  })
}
