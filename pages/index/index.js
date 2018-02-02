//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    a: 45.8038,
    b: 126.5350
  },
  control:function(e){
    switch(e.controlId){
      case 1:
      this.map.moveToLocation();
      break;
      case 2:
      if(this.flag){
          wx.navigateBack({
            delta:1
          })
      }else{
      wx.scanCode({
        success:(res)=>{
          wx.request({          url:"https://www.easy-mock.com/mock/5a6d782a64bcc735e02b240b/ofo/ofo#!method=get",
          success:
          (res)=>{
            wx.redirectTo({
              url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`,
            })
          }
          })
          
        }
      })
      }
      break;
      case 3:
      wx.navigateTo({
        url: '../warn/warn',
      })
      break;
      case 4:
      wx.navigateTo({
        url: '../my/my',
      })
      
    }
  },
  onLoad:function(p){
    this.flag=p.flag;
    wx.getLocation({
      success:(res)=> {
        this.setData({
          a:res.latitude,
          b:res.longitude
        })
      }
    })
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          controls:[{
            id:1,
            iconPath:'/images/location.png',
            position:{
              width:50,
              height:50,
              top:res.windowHeight-100,
              left:20
            },
            clickable:true
          },
            {
              id: 2,
              iconPath: '/images/use.png',
              position: {
                width: 90,
                height: 90,
                top: res.windowHeight - 120,
                left: res.windowWidth/2-45
              },
              clickable:true
            },
            {
              id: 3,
              iconPath: '/images/warn.png',
              position: {
                width: 50,
                height: 50,
                top: res.windowHeight - 100,
                left: res.windowWidth  - 70
              }
              ,
              clickable: true
            },
            {
              id: 5,
              iconPath: '/images/marker.png',
              position: {
                width: 35,
                height: 50,
                top: res.windowHeight/2 - 50,
                left: res.windowWidth /2 - 18
              }
            }]
        })
      },
    })
    
  },
  onShow:function(){
    this.map=wx.createMapContext('mapId', this)
    
  },
  onReady:function(){
    
  }
 
})
