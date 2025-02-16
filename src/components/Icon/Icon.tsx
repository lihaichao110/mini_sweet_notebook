import React from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import { pxTransform } from '@tarojs/taro'
import { HIconType } from '@/types/icons'
import './Icon.scss'

export interface IconProps {
  /** 图标图案 */
  name: HIconType
  /** 图标颜色 */
  color?: string
  /** 图标大小 */
  size?: number
  /**
   * className前缀，用于第三方字体图标库
   * 比如想使用'fa fa-clock' 的图标，则 传入prefixClass='fa' value='clock'
   */
  prefixClass?: string
  style?: React.CSSProperties
  className?: string
  /** 点击事件 */
  onClick?: (e: ITouchEvent) => void
}

const Icon: React.FC<IconProps> = ({
  color,
  name,
  size = 16,
  onClick = () => void 0,
  style: newStyle,
  className = '',
}) => {
  const style = {
    color: color || 'inherit',
    fontSize: pxTransform(size),
    ...newStyle,
  }

  const iconClassName = `lhc-sweet-book lhc-sweet-book-${name} ${className}`

  return <View className={iconClassName} style={style} onClick={onClick} />
}

export default Icon
