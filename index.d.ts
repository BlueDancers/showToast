/**
 * 上传文件
 */
export declare function showToast(params: {
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
}): {
  /**
   * 关闭弹窗
   */
  close: () => void
}
