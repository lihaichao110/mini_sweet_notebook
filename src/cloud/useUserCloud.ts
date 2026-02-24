import Taro from '@tarojs/taro';
import React, { useEffect } from 'react'

export default function useUserCloud() {
  const UserCloud = Taro.cloud.database().collection('Users')
  const getUserInfo = async () => {
    const res = await UserCloud.get()
    console.log(res.data[0], 'test');
  }

  const setAvatarImg = (url: ArrayBuffer) => {
    console.log(url, 'url')
    Taro.cloud.callFunction({
      name: 'test',
      data: {
        avatarUrl: url
      },
    }).then(res => {
      console.log(res.result, 'call');
    })
  }

  return {
    getUserInfo,
    setAvatarImg
  }
}
