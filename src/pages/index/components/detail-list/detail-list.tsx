import { View, Text } from '@tarojs/components'
import Icon from '@/components/Icon/Icon'
import React from 'react'

import './detail-list.scss'

const classPrefix = 'detail-list'
function DetailList() {
  return (
    <View className={classPrefix}>
      {
        [1,2,4,5].map((item, index) => (
          <View className={`${classPrefix}-item`} key={index}>
            <View className={`${classPrefix}-item-info`}>
              <View className={`${classPrefix}-item-info-icon`}>
                <Icon name='mingxi-xianxing' />
              </View>
              <Text className={`${classPrefix}-item-info-text`}>居家</Text>
            </View>
            <Text className={`${classPrefix}-item-consume`}>-9</Text>
          </View>
        ))
      }
    </View>
  )
}

export default DetailList
