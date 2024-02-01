/**
 * @description JS对象深度合并
 * @param {object} target 需要拷贝的对象
 * @param {object} source 拷贝的来源对象
 * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
 */
function deepMerge(target = {}, source = {}) {
  target = deepClone(target)
  if (typeof target !== 'object' || target === null || typeof source !== 'object' || source === null) return target
  const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target)
  for (const prop in source) {
    if (!Object.prototype.hasOwnProperty.call(source, prop)) continue
    const sourceValue = source[prop]
    const targetValue = merged[prop]
    if (sourceValue instanceof Date) {
      merged[prop] = new Date(sourceValue)
    } else if (sourceValue instanceof RegExp) {
      merged[prop] = new RegExp(sourceValue)
    } else if (sourceValue instanceof Map) {
      merged[prop] = new Map(sourceValue)
    } else if (sourceValue instanceof Set) {
      merged[prop] = new Set(sourceValue)
    } else if (typeof sourceValue === 'object' && sourceValue !== null) {
      merged[prop] = deepMerge(targetValue, sourceValue)
    } else {
      merged[prop] = sourceValue
    }
  }
  return merged
}

export default deepMerge
