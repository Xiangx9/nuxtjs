/**
 * 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
 * @param value 堵塞时间 单位ms 毫秒
 * @returns
 */
export const sleep = (value = 30) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, value)
  })
}

/**
 * 字符串中间星号
 * @param value 内容
 * @returns
 */
export const stringStar = ({ value = '默认内容', characters = '****', start = 3, end = 4 }) => {
  const reg = new RegExp('^(.{' + start + '}).*(.{' + end + '})$')
  if (value) {
    return value.replace(reg, `$1${characters}$2`)
  }
  return ''
}

/**
 * 随机数
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export const numberRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * 科学计数法转换数字
 * @param x 数字
 * @returns
 */
export const transferToNumber = (x: any) => {
  if (Math.abs(x) < 1.0) {
    const e = parseInt(x.toString().split('e-')[1])
    if (e) {
      x *= Math.pow(10, e - 1)
      x = '0.' + new Array(e).join('0') + x.toString().substring(2)
    }
  } else {
    let e = parseInt(x.toString().split('+')[1])
    if (e > 20) {
      e -= 20
      x /= Math.pow(10, e)
      x += new Array(e + 1).join('0')
    }
  }
  return Number(x).toFixed(8)
}

/**
 * @description 数字格式化
 * @param {number|string} number 要格式化的数字
 * @param {number} decimals 保留几位小数
 * @param {string} decimalPoint 小数点符号
 * @param {string} thousandsSeparator 千分位符号
 * @returns {string} 格式化后的数字
 */
export const priceFormat = (number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',') => {
  number = `${number}`.replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator
  const dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint
  let s = []
  s = (prec ? round(n, prec) + '' : `${Math.round(n)}`).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/**
 * @description 日期的月或日补零操作 0-9 补零
 * @param {String} value 需要补零的值
 */
export const padZero = (value) => {
  return `00${value}`.slice(-2)
}

/**
 * @description 获取duration值
 * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
 * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
 * @param {String|number} value 比如: "1s"|"100ms"|1|100
 * @param {boolean} unit  提示: 如果是false 默认返回number
 * @return {string|number}
 */
export const getDuration = (value, unit = true) => {
  const valueNum = parseInt(value)
  if (unit) {
    if (/s$/.test(value)) return value
    return value > 30 ? `${value}ms` : `${value}s`
  }
  if (/ms$/.test(value)) return valueNum
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000
  return valueNum
}

/**
 * 格式化文件大小
 * @param filesize 文件大小
 * @param Bytes bytes单位
 * @param decimalPoint 小数点
 * @returns
 */
export const formatFileSize = (filesize: number, Bytes = 1024, decimalPoint = 2) => {
  const format = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  if (filesize === 0) return `0${format[0]}`
  const i = Math.floor(Math.log(filesize) / Math.log(Bytes))
  return parseFloat((filesize / Math.pow(Bytes, i)).toFixed(decimalPoint)) + format[i]
}

/**
 * 秒 转 时长
 * @param value  秒
 * @param dateFormat 格式 默认 hh:mm:ss
 * @returns
 */
export const formatDuration = (value, dateFormat = 'hh:mm:ss') => {
  let hour: any = parseInt((value / 3600).toString())
  //时
  if (hour < 10) hour = '0' + hour
  let minute: any = parseInt(((value % 3600) / 60).toString())
  //分
  if (minute < 10) minute = '0' + minute
  let second: any = Math.ceil(value % 60)
  //秒
  if (second < 10) second = '0' + second
  switch (dateFormat) {
    case 'hh:mm':
      return hour + ':' + minute
      break
    case 'mm:ss':
      return minute + ':' + second
      break
    case 'hh':
      return hour
      break
    default:
      if (hour > 0) return hour + ':' + minute + ':' + second
      else return minute + ':' + second
      break
  }
}
