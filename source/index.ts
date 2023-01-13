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
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMAf1ZUxGe09OJySNTNq5mSiHdZTz85LyolFgztvKNiEAXcpXltXkM1Hxvl5FlbqygAAAHnSURBVHja7dtXcttAFETRZgBzzqREUlaW/fa/PttlS0UM8C/01D0rmPs5XfUEAAAAAAAAAAAAAAAAAAAAANBhNdwcZW9/jr9mMte+i/9krR1f5jLWjhsj2Sp1xEWuyh3xJFNJRzzLU9oRHVmqdEyuctSO1FqOqh0tOaKjWehoFjqahY5moaNZ6GgWOpqFjmaho1m+p2PbHcSgO7TvuMQ/PfOOIj71rDt2/fjyaNyhTtyY+XaoiFsL2w4to2Tp2qFVlBWmHXqNxMqzQ2pFYuTZIU0jsfXs0EMvEjvLDul0H4m9ZYd07Ebi3bJDep9E4mjZIR3GUda/WnZIux9RNniw7JC2v6Js7Nkhbe6irOvZIY36Udbz7JDWkXj07JBWkZh7dkiXSCw8O6Si8izPDmkYiaVnh/QUiWfPjpqPVuHZIS0i8eLZIc0j0fHskGaRWKuiY9AhnSPx6tlRN0h4dlQHif6bZUfNIDHYW3bUDBLjg2WH9JEOEpMPy46aQaJ7teyoGSTuT5Yd0tvPKOt5dtQMElPPjuog4dohrTPpkNqZdEgvmXRIRSYd0jCTDmmZSYfUyqRDWmTSIc0z6ZBmmXRI50w6pGkmHVIxiD+6xkfon06bYWcvAAAAAAAAAAAAAAAAAAAAAMjXbxyUYYjFiq/hAAAAAElFTkSuQmCC'
  let baseLoadingIcon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAVqAgmzwu371+MY5oHPbq2XlOJxAG0M21p3YVxcJy8OzlcG1KCwTTyDiqhl9A/KyThVxKvYfuAAAEIklEQVR42u3d6XaiQBAF4AuiqCi472s00cQsM3Pf/93GnEnONAjGn946fG/QB4uuripalEqlUqlUKpW0zVrevlqrzIcQx2+bo9/wmo9QxYxtvfsMRcyxmbZqUMMCh8DTChsWC6MqdPCq5aoCEfxBPO1BAn+2bClEC29x6LZx73ibJLr3FzJv9vu+d33ebuThjg0qtWrvz64R1EP+yO9DwVN/v/M7vCZ5gIy2Fx1ZrC6VUrZfJywStyCleeqwQDCAlCfvg/nGbxDTjNbM8y4U818qjZB5fMgZPIyYYwJBsw0vLSCo7/PSAYp6C14IIWkWM2sNSdUxL0DSfMqsBJoaRiIe8LbMqENTbcSMF2hqH62sBEsDedc/E2bo5cJffjHtXe588u3EtLHYmbH4mQRQ5TNNrCLh+GBKLFUlcs0XNnZ4oLZlygqqPKYkGnXhPA0jGzwwZcpddx2umo/pGt13J+iaapzuaUHWjCn33me8YkFXBFk9upL772LfmHR1Iau/oeOgMCNRYGYkCwZGdCyh64EukVmiPIOQjil0NeiIZSbVLlXWJmpDZ5GVcG/SpTTRmfVhJOFKn3o7wrv7U8fGSRE42Sg7ZsK9A2ETOprQ9WqjVgdU5Aduvo31JyL+Caxs7qkgaUBXxUaP4cw9Xm0hzKdDtwoM7KxsiXsreWPfSMURT0a6V0CoPkv7rc7/NhAW0CF83EWXjjl0tegQrjfCM7kjyo6inT0b6S6gRscf6GpbacEN6Oje9paWnYU0+5YWnvnA3kq5pVq+pe9MhY4ddM2tVPKGVnpC2FgpSR71v8nMKUk+QVeDDt3x7UyOsoeuppWN5NHM+3drpSdfp0N4UhhdKw2IZytDUakk5QhhUytB0qLjFbpqZgZXOlbq3YGRD5oyw5zCqfwwtLInRiYujTir0kq4L62kKSs61sJF+UpspU43pSMUbvj0bNyskg33EXS16JpB1rBj5KIFdI1cEYN2YuVLzEj/Ast/arQS7ye6Yt1e9eOIrrHu2J1HGvlg2SdtJI/9xMplNyumbHWnbOpMGclWUKsxSRNF7Z2Ry1GBwMK14Z8GY6b9gqi3d6adIGpFK8/Et3th7YdqArlgxkJ1jz8wY6uad4UkbeTCa2ZNRQOFF8aip9+EWbFoReLACwvNeledlwLJauoLLyWSv68X5hg9CHaCfOYJG3p9xtU786wjuS7225j5XjyxaY9BwAKd32KPZRezyORVqmJUrbPYOHgVCv1VwmtCf7fva4RM3+ePwnrQbXn751r7rjcab8QiYn+p9XgyshCgFiU2FgK0ux0bCwGGraWNhZz1prGNhQCV1dLGQs6qUWhjIcDQ8zsmFvLpeTZZm1jIp2qjvjWxkE+PTa/hHzf6C/kynFeab70/LeXL4kqlUqlUKpVKZ38B8SFupNSVbngAAAAASUVORK5CYII='
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
