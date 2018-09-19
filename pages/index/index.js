//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
       
        title: '斯蒂芬斯蒂芬斯蒂芬',
        desc: '斯蒂芬斯蒂芬斯蒂芬是发是'      
      },
      {
       
        title: '你好速度',
        desc: '淡淡地说了代理商放假了对方'
      },
      {

        title: '是色师德师风色嗯嗯',
        desc: '是色师德师风色嗯嗯的顶顶顶顶顶的顶顶顶顶顶'
      },
      {

        title: '的发生大幅度',
        desc: '法规和规范合法 电饭锅'
      },
      {

        title: '而沃尔特',
        desc: '方大化工风格很烦很烦很烦'
      }
    ]
  },
  toDetails (event) {
    console.log(event);
    const index = event.currentTarget.dataset.index;
    console.log(index)
  }
  
 })
