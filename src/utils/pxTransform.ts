import Taro from "@tarojs/taro"

export const pxTransform = (size: number): string =>
  Taro.pxTransform(size)
