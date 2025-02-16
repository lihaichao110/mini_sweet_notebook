import { View, Text } from '@tarojs/components'
import useMenurStore from '@/store/menu'
import { AtFloatLayout } from "taro-ui"
import { MenuIcons } from './constants'
import './menu.scss'
import Icon from '../Icon/Icon'

const classPrefix = 'action-menu'
export default function Menu() {
  const { visible, setVisible } = useMenurStore()

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <AtFloatLayout isOpened={visible} className={classPrefix}>
      <View className={`${classPrefix}-header`} onClick={handleClose}>取消</View>
      <View className={`${classPrefix}-content`}>
        {
          MenuIcons?.map((item, index) => (
            <View
              key={index}
              className={`${classPrefix}-content-item`}
            >
              <View className={`${classPrefix}-content-item-icon`}>
                <Icon name={item.icon} size={26} />
              </View>
              <Text className={`${classPrefix}-content-item-label`}>{item.name}</Text>
              </View>
          ))
        }
      </View>
    </AtFloatLayout>
  )
}

