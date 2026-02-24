// 云函数入口文件
// eslint-disable-next-line
const cloud = require("wx-server-sdk");

cloud.init();

// 云函数入口函数
// eslint-disable-next-line import/no-commonjs
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  console.log(event, "event");

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    sum: event.a + event.b,
  };
};
