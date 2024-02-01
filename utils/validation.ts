/**
 * 验证手机格式
 * @param value 内容
 * @returns
 */
export function isMobile(value: string) {
  // return /^1[3-9]\d{9}$/.test(value)
  return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value)
}

/**
 * 验证邮箱格式
 * @param value 内容
 * @returns
 */
export function isEmail(value: string) {
  // return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value)
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证密码格式
 * @param value 内容
 * @returns
 */
export function isPassword(value: string) {
  // 密码长度8 ~ 16位，必须包含大小写字母,数字
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[^]{8,16}$/.test(value)
  // 密码长度8 ~ 16位，必须包含大小写字母,数字以及特殊字符
  // return /^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W].{8,16}$/.test(value);
}

/**
 * 验证URL格式
 */
export function isUrl(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
    value
  )
}

/**
 * 验证日期格式
 */
export function isDate(value) {
  if (!value) return false
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (isNumber(value)) value = +value
  return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
export function isDateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
export function isNumber(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

/**
 * 验证字符串
 */
export function isString(value) {
  return typeof value === 'string'
}

/**
 * 验证整数
 */
export function isDigits(value) {
  return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
export function isIdCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

/**
 * 是否车牌号
 */
export function isCarNo(value) {
  // 新能源车牌
  const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
  // 旧车牌
  const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
  if (value.length === 7) {
    return creg.test(value)
  }
  if (value.length === 8) {
    return xreg.test(value)
  }
  return false
}

/**
 * 金额,只允许2位小数
 */
export function isAmount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

/**
 * 中文
 */
export function isChinese(value) {
  const reg = /^[\u4e00-\u9fa5]+$/gi
  return reg.test(value)
}

/**
 * 只能输入字母
 */
export function isLetter(value) {
  return /^[a-zA-Z]*$/.test(value)
}

/**
 * 只能是字母或者数字
 */
export function isEnOrNum(value) {
  // 英文或者数字
  const reg = /^[0-9a-zA-Z]*$/g
  return reg.test(value)
}

/**
 * 验证是否包含某个值
 */
export function isContains(value, param) {
  return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
export function isRange(value, param) {
  return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
export function isRangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
export function isLandline(value) {
  const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
  return reg.test(value)
}

/**
 * 判断是否为空
 */
export function isEmpty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (value === 0 || isNaN(value)) return true
      break
    case 'object':
      if (value === null || value.length === 0) return true
      for (const i in value) {
        return false
      }
      return true
  }
  return false
}

/**
 * 是否json字符串
 */
export function isJsonString(value) {
  if (typeof value === 'string') {
    try {
      const obj = JSON.parse(value)
      if (typeof obj === 'object' && obj) {
        return true
      }
      return false
    } catch (e) {
      return false
    }
  }
  return false
}

/**
 * 是否数组
 */
export function isArray(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}

/**
 * 是否对象
 */
export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 是否短信验证码
 */
export function isCode(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}

/**
 * 是否函数方法
 * @param {Object} value
 */
export function isFunc(value) {
  return typeof value === 'function'
}

/**
 * 是否promise对象
 * @param {Object} value
 */
export function isPromise(value) {
  return isObject(value) && isFunc(value.then) && isFunc(value.catch)
}

/** 是否图片格式
 * @param {Object} value
 */
export function isImage(value) {
  const newValue = value.split('?')[0]
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
  return IMAGE_REGEXP.test(newValue)
}

/**
 * 是否视频格式
 * @param {Object} value
 */
export function isVideo(value) {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i
  return VIDEO_REGEXP.test(value)
}

/**
 * 是否为正则对象
 * @param {Object}
 * @return {Boolean}
 */
export function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]'
}
