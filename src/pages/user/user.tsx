import { View, Image, Text } from '@tarojs/components'
import { useLoad, getSystemInfoSync } from '@tarojs/taro'
import Menu from '@/components/menu/menu'
import Icon from '@/components/Icon/Icon'
import AvatarImg from '@/assets/images/avatar.jpeg'
import UserBackground from '@/assets/svg/user-background.svg'
import Empty from '@/assets/svg/empty.svg'
import { color, primary } from '@/constants/color'

import './user.scss'

const classPrefix = 'user-page'
export default function User() {
  const statusBarHeight = getSystemInfoSync().statusBarHeight
  useLoad(() => {
    console.log('Page loaded.', getSystemInfoSync().statusBarHeight)
  })

  return (
    <View className={classPrefix}>
      <Image
        style={{ transform: `translate3d(0, ${statusBarHeight}px, 0)`}}
        className={`${classPrefix}-background`}
        src={UserBackground}
      />
      <View className={`${classPrefix}-wrapper`}>
        <View className={`${classPrefix}-wrapper-info`}>
          <View className={`${classPrefix}-wrapper-info-wx`}>
            <Image className={`${classPrefix}-wrapper-info-wx-avatar`} src={AvatarImg} />
            <View className={`${classPrefix}-wrapper-info-wx-name`}>
              <Text className={`${classPrefix}-wrapper-info-wx-name-text`}>微信昵称</Text>
              <View className={`${classPrefix}-wrapper-info-wx-name-sex`}>
                <Icon size={8} name='nv' color={color} />
              </View>
            </View>
            <View className={`${classPrefix}-wrapper-info-wx-id`}>
              <Icon size={18} name='iddenglufanbai' color={primary} />
              <Text className={`${classPrefix}-wrapper-info-wx-id-number`}>123123123</Text>
            </View>
          </View>
          <View className={`${classPrefix}-wrapper-info-data`}>
            <View
              className={`${classPrefix}-wrapper-info-data-item`}
            >
              <View className={`${classPrefix}-wrapper-info-data-item-value`}>99</View>
              <View className={`${classPrefix}-wrapper-info-data-item-label`}>记账次数</View>
            </View>
            <View
              className={`${classPrefix}-wrapper-info-data-item`}
            >
              <View className={`${classPrefix}-wrapper-info-data-item-value`}>99</View>
              <View className={`${classPrefix}-wrapper-info-data-item-label`}>记账天数</View>
            </View>
            <View
              className={`${classPrefix}-wrapper-info-data-item`}
            >
              <View className={`${classPrefix}-wrapper-info-data-item-value`}>99</View>
              <View className={`${classPrefix}-wrapper-info-data-item-label`}>记账天数</View>
            </View>
          </View>
        </View>

        <View className={`${classPrefix}-wrapper-setting`}>
          <Image src={Empty} />
        </View>
      </View>
      <Menu />
    </View>
  )
}
