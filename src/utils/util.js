import mpx from '@mpxjs/core'
import apiProxy from '@mpxjs/api-proxy'
import globalStore from '~/store/global'

mpx.use(apiProxy, { usePromise: true })

export const $ = (selector, isAll) => {
  const md = __mpx_mode__
  const context = md === 'ali' ? my : (md === 'swan' ? swan : wx)
  const query = context.createSelectorQuery()
  const selectFn = isAll ? 'selectAll' : 'select'
  return new Promise((resolve, reject) => {
    try {
      if (md === 'ali') {
        const done = ret => resolve(isAll ? ret : ret[0])
        query[selectFn](selector).boundingClientRect().exec(done)
      } else {
        // @see https://developers.weixin.qq.com/miniprogram/dev/api/NodesRef.fields.html
        const arg = { rect: true, size: true, dataset: true }
        const done = ctx => resolve(ctx)
        query[selectFn](selector).fields(arg, done).exec()
      }
    } catch (err) {
      reject(err)
    }
  })
}

const isType = (o, t) => Object.prototype.toString.call(o) === `[object ${t}]`

const isObject = o => isType(o, 'Object')

const isString = o => isType(o, 'String')

/**
   * 检查小程序指定权限, 如果未授权, 打开到权限设置页
   * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-列表
   * @param {string} scope - 要检测的授权类型
   * @param {boolean?} isCallAuth - 未授权时是否自动发起授权弹框
   */
const checkAppAuthorize = async (scope, isCallAuth = false) => {
  try {
    let res = await mpx.getSetting()
    // 判断undefined的情况是为了第一次发起授权能够正常调起来授权弹框
    if (res.authSetting[scope] === true || res.authSetting[scope] === undefined) {
      return Promise.resolve(true)
    }
    if (isCallAuth) {
      // await mpx.authorize({ scope })
      res = await mpx.openSetting()
      return Promise.resolve(!!res.authSetting[scope])
    } else {
      return Promise.resolve(false)
    }
  } catch (err) {
    return Promise.resolve(false)
  }
}

/**
 * 下载文件
 * @param {String} url - 下载地址
 * @param {Function} callbacksuccess - 成功回调
 * @param {Function} callbackfail - 失败回调
 */
const downFile = async (url, callbacksuccess, callbackfail) => {
  try {
    let res = await mpx.downloadFile({ url })
    res = await mpx.saveImageToPhotosAlbum({ filePath: res.tempFilePath })

    if (typeof callbacksuccess === 'function') callbacksuccess(res) // 兼容旧方式调用
    return Promise.resolve(res)
  } catch (err) {
    if (typeof callbackfail === 'function') callbackfail(err) // 兼容旧方式调用
    return Promise.reject(err)
  }
}

/**
 * @desc 函数防抖
 * @param {function} func 目标函数
 * @param {number} wait 延迟执行毫秒数
 * @param {boolean} immediate true - 立即执行， false - 延迟执行
 */
const debounce = (func, wait, immediate) => {
  let timer
  return function (...args) {
    const context = this

    if (timer) clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * @desc 节流函数，对于想控制一些触发频率较高的事件有帮助
 *       创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 `wait` 毫秒调用一次该函数
 *       默认情况下，throttle将在你调用的第一时间尽快执行这个function，并且，如果你在 `wait` 周期内调用任意次数的函数，都将尽快的被覆盖。
 *       如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。
 * @param {function} func 目标函数
 * @param {number} wait 延迟执行毫秒数
 * @param {object} options
 * ├──@prop {boolean?} leading - 是否在开始前执行一次
 * ├──@prop {boolean?} trailing - 是否在时间结束后执行
 */
const throttle = (func, wait, options) => {
  let timeout, context, args, result
  let previous = 0
  if (!options) options = {}

  const later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  const throttled = function (..._args) {
    const now = Date.now()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    context = this
    args = _args
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }

  throttled.cancel = function () {
    clearTimeout(timeout)
    previous = 0
    timeout = context = args = null
  }

  return throttled
}

/**
 * 微信状态栏高度
 */
const wxStatusBarHeight = () => {
  try {
    const systemInfo = wx.getSystemInfoSync()
    const model = systemInfo.model
    const isIpx = model.search('iPhone X') !== -1
    globalStore.commit('SET_IS_IPX', isIpx)
    return Math.abs(systemInfo.statusBarHeight) || 20
  } catch (err) {
    console.error('util.wxStatusBarHeight', err)
    return 0
  }
}

/**
 * 微信标题栏高度
 */
const wxNavBarHeight = () => {
  try {
    if (__mpx_mode__ === 'ali') {
      return Math.abs(wx.getSystemInfoSync().titleBarHeight)
    } else {
      if (wx.getMenuButtonBoundingClientRect) {
        const rect = wx.getMenuButtonBoundingClientRect
          ? wx.getMenuButtonBoundingClientRect()
          : null
        const gap = rect.top - wxStatusBarHeight()
        return Math.abs(2 * gap + rect.height)
      } else {
        // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    }
  } catch (err) {
    console.error('util.wxNavBarHeight', err)
    return 0
  }
}

export default {
  isObject,
  isString,
  checkAppAuthorize,
  downFile,
  debounce,
  throttle,
  wxStatusBarHeight,
  wxNavBarHeight
}