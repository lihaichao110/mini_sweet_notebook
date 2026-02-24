/* eslint-disable no-undef */
// 云函数入口文件
const cloud = require("wx-server-sdk");
const fs = require("fs");
const path = require("path");

cloud.init({ env: "cloud1-8g57q5mpc514ba1c" }); // 使用当前云环境

// 云函数入口函数
exports.main = async (event) => {
  const { avatarUrl } = event;
  const { OPENID, APPID } = cloud.getWXContext();
  const readStream = fs.createReadStream(avatarUrl);

  // 3. 或转换为 Buffer
  const buffer = fs.readFileSync(avatarUrl);
  console.log(readStream, buffer, "buffer");
  const result = await cloud.uploadFile({
    fileContent: buffer,
    cloudPath: `avatar/${Date.now()}.png`,
  });
  console.log(result, "result");
  const usersDB = cloud.database().collection("Users");

  usersDB.get().then((res) => {
    console.log(res, "usersDB");
  });

  return {
    event,
    openid: OPENID,
    appid: APPID,
  };
};
