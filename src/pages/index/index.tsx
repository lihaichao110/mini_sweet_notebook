import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Menu from '@/components/menu/menu'
import IncomeSvg from '@/assets/svg/income.svg'
import ExpendSvg from '@/assets/svg/expend.svg'
import DetailList from './components/detail-list/detail-list'
import './index.scss'

const classPrefix = 'index-page'
export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={classPrefix}>
      <View className={`${classPrefix}-wrapper`}>
        <View className={`${classPrefix}-wrapper-overview`}>
          {/* <View className={`${classPrefix}-wrapper-overview-time`}>选择时间：2025-02-10</View> */}
          <View className={`${classPrefix}-wrapper-overview-content`}>
            <View className={`${classPrefix}-wrapper-overview-content-item`}>
              <Image className={`${classPrefix}-wrapper-overview-content-item-icon`} src={IncomeSvg}></Image>
              <View className={`${classPrefix}-wrapper-overview-content-item-value`}>123.00</View>
              <View className={`${classPrefix}-wrapper-overview-content-item-label`}>今日收入</View>
            </View>
            <View className={`${classPrefix}-wrapper-overview-content-item`}>
            <Image className={`${classPrefix}-wrapper-overview-content-item-icon`} src={ExpendSvg}></Image>
              <View className={`${classPrefix}-wrapper-overview-content-item-value`}>123.00</View>
              <View className={`${classPrefix}-wrapper-overview-content-item-label`}>今日支出</View>
            </View>
          </View>
        </View>

        {/* <View className={`${classPrefix}-wrapper-detail`}>
          <View className={`${classPrefix}-wrapper-detail-group`}>
            <View className={`${classPrefix}-wrapper-detail-group-title`}>
              02月05日 星期五
              <Text>支出：999</Text>
            </View>
            <DetailList />
          </View>
          <View className={`${classPrefix}-wrapper-detail-group`}>
            <View className={`${classPrefix}-wrapper-detail-group-title`}>
              02月05日 星期五
              <Text>支出：999</Text>
            </View>
            <DetailList />
          </View>
        </View> */}
      </View>
      <Menu />
    </View>
  )
}
