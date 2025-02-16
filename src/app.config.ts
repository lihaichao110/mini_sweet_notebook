export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/user',
  ],
  lazyCodeLoading: 'requiredComponents',
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    custom: true,
    color: '#5b492e',
    selectedColor: '#409EFF',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '明细'
      },
      {
        pagePath: 'pages/user/user',
        text: '我的'
      }
    ]
  }
})
