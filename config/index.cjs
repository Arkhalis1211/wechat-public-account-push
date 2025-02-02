/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfca3df3824422d3d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7d757db826bb3eb2fd14ced8bf949aaa',

  PROVINCE: '湖北省',
  CITY: '十堰市',

    // 功能开关,打开：true，关闭：false
  SWITCH: {
      /** 每日天气 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      weather: true,
  
      /** 节假日 */
      // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      holidaytts: false,
  
      /** 每日N句 */
      // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      CIBA: false,
      
      // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      oneTalk: false,
      
      // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      earthyLoveWords: false,
      
      // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      momentCopyrighting: false,
      
      // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      poisonChickenSoup: false,
      
      // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      poetry: false,
  
      /** 星座运势 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      horoscope: false,
    
      /** 生日消息和节日消息 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      birthdayMessage: false,
    
      /** 学生课表 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      courseSchedule: false,
  },

  USERS: [
    {
      // 想要发送的人的名字
      name: '小缘宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oeUhM7GoX7pY7s1gVLwdeIL1jJdw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	TFVjpSSLx1B6rEadJmqOOmhcG-RvwaDTED1g2V1SgMk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小缘宝宝', year: '2004', date: '07-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小应', year: '2002', date: '12-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '10-27',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-10-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oeUhM7GoX7pY7s1gVLwdeIL1jJdw',
    }
  ],

}

module.exports = USER_CONFIG

