import { PropsWithChildren } from 'react'
import Taro, { useLaunch } from '@tarojs/taro'
import CloudInit from '@/cloud/index'
import './styles/index.scss'

function App({ children }: PropsWithChildren<any>) {
  const loginAccount = async () => {
    const loginInfo = await Taro.login()
    if (!loginInfo.code) return

    Taro.request({
      method: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        js_code: loginInfo.code,
        appid: 'wx4b7f1d0c6c44442d',
        secret: 'd98a28cda5bce4c102b5a86e1f6af41d',
        grant_type: 'authorization_code',
      },
      success(result) {
        console.log(result, 'res');
      },
    })
  }


  useLaunch(() => {
    // loginAccount()
    CloudInit()
  })

  // children 是将要会渲染的页面
  return children
}

export default App
