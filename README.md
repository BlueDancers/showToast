# @vkcyan/showToast

## 介绍

**通过函数的方式，唤起toast框，使用方法与微信小程序的API`wx.showToast`类似。**

**0依赖，10kb以内的toast工具库**



## 基本用法

### 安装

```bash
npm i @vkcyan/show-toast
```

### 使用示例

```js
import { showToast } from '@vkcyan/show-toast'

let toast = showToast({
  title: '这是一段提示',
  icon: 'success',
})

// 直接停止
toast.close()
```

## API

| 属性     | 类型                 | 默认值 | 说明                |
| -------- | -------------------- | ------ | ------------------- |
| title    | string               |        | toast提示文本       |
| icon     | none\|error\|loading | none   | toast类型           |
| mask     | boolean              | true   | toast是否存在遮罩层 |
| duration | number               | 1500   | 持续时间            |



## function

| 方法  | 返回值 |      | 说明                  |
| ----- | ------ | ---- | --------------------- |
| close | void   |      | 手动关闭进行中的toast |

