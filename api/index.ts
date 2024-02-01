enum Method {
  GET = 'GET',
  POST = 'POST'
}

enum Api {
  getHelpDocumentsInfo = '/prod-api/api/operate/getHelpDocumentsInfo',
  getUserInfo = '/prod-api/api/operate/getUserInfo',
  wechatLogin = '/prod-api/api/operate/wechatLogin'
}

export function ApiOperateGetHelpDocumentsInfo() {
  return useServerRequest(Api.getHelpDocumentsInfo, { method: Method.GET, params: {} }, { isToken: false })
}

export function ApiOperateGetUserInfo() {
  return useServerRequest(Api.getUserInfo, { method: Method.GET, params: {} }, { isToken: true })
}

export function ApiAuthWechatLogin(code) {
  return useServerRequest(Api.wechatLogin, { method: Method.POST, body: { code } }, { isToken: false })
}
