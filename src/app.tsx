import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import "@tarojs/async-await";
import dva from './utils/dva';
import { Provider } from "@tarojs/redux";
import './app.scss'
import './assets/taro-ui.css'
import models from './models'
import { getAccessToken } from './services/global'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState:{},
  models:  models,
})

const store = dvaApp.getStore();

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/detail/index',
      'pages/index/index',
      'pages/cateList/index',
      // 'pages/mine/index',
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    },
    // tabBar: {
    //   color: '#666',
    //   selectedColor: '#b4282d',
    //   backgroundColor: '#fafafa',
    //   borderStyle: 'black',
    //   list: [{
    //     pagePath: 'pages/index/index',
    //     iconPath: './assets/tab-bar/home.png',
    //     selectedIconPath: './assets/tab-bar/home-active.png',
    //     text: '首页'
    //   }, {
    //     pagePath: 'pages/cateList/index',
    //     iconPath: './assets/tab-bar/cate.png',
    //     selectedIconPath: './assets/tab-bar/cate-active.png',
    //     text: '分类'
    //   }, {
    //     pagePath: 'pages/cart/index',
    //     iconPath: './assets/tab-bar/cart.png',
    //     selectedIconPath: './assets/tab-bar/cart-active.png',
    //     text: '购物车'
    //   }, {
    //     pagePath: 'pages/mine/index',
    //     iconPath: './assets/tab-bar/user.png',
    //     selectedIconPath: './assets/tab-bar/user-active.png',
    //     text: '个人'
    //   }]
    // }
  }

  componentDidMount () {}

  componentDidShow () {
    // let { path } = this.$router.params;
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       getAccessToken(res.code);
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
