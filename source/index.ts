type paramsType = {
  /**
   * 提示问题
   */
  title: string
  /**
   * 提示类型
   */
  icon?: 'none' | 'loading' | 'success'
  /**
   * 是否存在蒙版
   */
  mask?: boolean
  /**
   * 显示时间
   */
  duration?: number
}

function showToast(params: paramsType) {
  let defualtParams: paramsType = {
    title: '',
    icon: 'none',
    mask: true,
    duration: 3000,
  }
  params = { ...defualtParams, ...params }
  let baseSuccessIcon =
    'data:image/png;base64,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'
  let baseLoadingIcon =
    'data:image/png;base64,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'
  let icon = {
    success: baseSuccessIcon,
    loading: baseLoadingIcon,
  }
  let _setInt: any = null // 定时器实例

  if (document.getElementById('vkcyan_show_toast')) {
    close()
  }

  const dom = _createDiv()
  if (params.icon && (params.icon == 'success' || params.icon == 'loading')) {
    let img = _createImg(params.icon)
    dom.appendChild(img)
  }

  dom.appendChild(_createText())
  document.body.appendChild(dom)

  // 存在自动关闭机制
  if (params.duration) {
    _setInt = setTimeout(() => close(), params.duration)
  }

  if (params.mask) {
    document.body.appendChild(_createMask())
  }

  /**
   * 手动关闭
   */
  function close() {
    let toast = document.getElementById('vkcyan_show_toast')
    let mask = document.getElementById('vkcyan_show_toast_mask')
    toast!.remove()
    if (mask) {
      mask.remove()
    }
    if (_setInt) {
      clearTimeout(_setInt)
      _setInt = null
    }
  }
  /**
   * toast主体
   */
  function _createDiv() {
    const dom = document.createElement('div')
    dom.id = 'vkcyan_show_toast'
    dom.style.position = 'fixed'
    dom.style.zIndex = '99999'
    dom.style.left = '50%'
    dom.style.top = `50%`
    dom.style.transform = 'translate(-50%, -50%)'
    dom.style.backgroundColor = 'rgba(17,17,17,0.7)'

    dom.style.borderRadius = `8px`
    dom.style.padding = params.icon == 'none' ? `10px 20px` : '16px 20px'
    dom.style.display = 'flex'
    dom.style.flexDirection = 'column'
    dom.style.alignItems = 'center'
    return dom
  }
  /**
   * toast底部提示文字
   */
  function _createText() {
    const domText = document.createElement('div')
    domText.style.color = 'white'
    domText.style.fontSize = '15px'
    domText.style.maxWidth = '100px'
    domText.innerText = params.title
    return domText
  }

  /**
   * toast蒙版
   */
  function _createMask() {
    let mask = document.createElement('div')
    mask.id = 'vkcyan_show_toast_mask'
    mask.style.position = 'fixed'
    mask.style.zIndex = '99998'
    mask.style.width = '100vw'
    mask.style.height = '100vh'
    mask.style.backgroundColor = 'rgba(0,0,0,0)'
    mask.style.top = '0'
    mask.style.left = '0'
    return mask
  }
  /**
   * toast内icon
   * @param type success 成功 loading 加载中
   */
  function _createImg(type: 'success' | 'loading') {
    let img = document.createElement('img')
    img.src = icon[type]
    img.style.width = '55px'
    img.style.height = '55px'
    img.style.marginLeft = '16px'
    img.style.marginRight = '16px'
    img.style.marginBottom = '6px'
    if (type == 'loading') {
      img.animate(
        [
          {
            transform: 'rotate(0deg) scale(1)',
          },
          {
            transform: 'rotate(180deg) scale(1.05)',
          },
          {
            transform: 'rotate(360deg) scale(1)',
          },
        ],
        {
          delay: 0,
          duration: 1000,
          iterations: Infinity,
          fill: 'forwards',
        }
      )
    }
    return img
  }

  return {
    close,
  }
}

export { showToast }
