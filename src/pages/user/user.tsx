import { View, Image, Text, Button } from "@tarojs/components";
import Taro, { useLoad, getWindowInfo } from "@tarojs/taro";
import { useEffect, useState } from "react";
import Menu from "@/components/menu/menu";
import Icon from "@/components/Icon/Icon";
import AvatarImg from "@/assets/images/avatar.jpeg";
import UserBackground from "@/assets/svg/user-background.svg";
import Empty from "@/assets/svg/empty.svg";
import { color, primary } from "@/constants/color";
import useUserCloud from "@/cloud/useUserCloud";

import "./user.scss";

const classPrefix = "user-page-ignore";
export default function User() {
  const { getUserInfo, setAvatarImg } = useUserCloud();

  const statusBarHeight = getWindowInfo().statusBarHeight;

  const [avatarUrlStr, setAvatarUrlStr] = useState(AvatarImg);
  const handleChooseAvatar = (info) => {
    const avatarUrl = info.detail.avatarUrl;
    const fs = Taro.getFileSystemManager();
    const file = fs.readFileSync(avatarUrl) as ArrayBuffer;
    console.log(file, "file");
    setAvatarUrlStr(avatarUrl);
    setAvatarImg(file);
  };

  const handleEditNickName = () => {
    Taro.navigateTo({
      url: "/pages/edit-nickname/edit-nickname",
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const onGetPhoneNumber = (eee) => {
    console.log(eee, "eee");
  };

  return (
    <View className={`${classPrefix}`}>
      <Button open-type="getPhoneNumber" onGetPhoneNumber={onGetPhoneNumber}>
        授权手机号
      </Button>
      <Image
        style={{ transform: `translate3d(0, ${statusBarHeight}px, 0)` }}
        className={`${classPrefix}-background`}
        src={UserBackground}
      />
      <View className={`${classPrefix}-wrapper`}>
        <View className={`${classPrefix}-wrapper-info`}>
          <View className={`${classPrefix}-wrapper-info-wx`}>
            <Button
              className={`${classPrefix}-wrapper-info-wx-avatar`}
              openType="chooseAvatar"
              onChooseAvatar={handleChooseAvatar}
            >
              <Image
                className={`${classPrefix}-wrapper-info-wx-avatar-image`}
                src={avatarUrlStr}
              />
            </Button>
            <View
              className={`${classPrefix}-wrapper-info-wx-name`}
              onClick={handleEditNickName}
            >
              <Text className={`${classPrefix}-wrapper-info-wx-name-text`}>
                微信昵称
              </Text>
              <View className={`${classPrefix}-wrapper-info-wx-name-sex`}>
                <Icon size={8} name="nv" color={color} />
              </View>
            </View>
            <View className={`${classPrefix}-wrapper-info-wx-id`}>
              <Icon size={18} name="iddenglufanbai" color={primary} />
              <Text className={`${classPrefix}-wrapper-info-wx-id-number`}>
                123123123
              </Text>
            </View>
          </View>
          <View className={`${classPrefix}-wrapper-info-data`}>
            <View className={`${classPrefix}-wrapper-info-data-item`}>
              <View className={`${classPrefix}-wrapper-info-data-item-value`}>
                99
              </View>
              <View className={`${classPrefix}-wrapper-info-data-item-label`}>
                记账次数
              </View>
            </View>
            <View className={`${classPrefix}-wrapper-info-data-item`}>
              <View className={`${classPrefix}-wrapper-info-data-item-value`}>
                99
              </View>
              <View className={`${classPrefix}-wrapper-info-data-item-label`}>
                记账天数
              </View>
            </View>
            <View className={`${classPrefix}-wrapper-info-data-item`}>
              <View className={`${classPrefix}-wrapper-info-data-item-value`}>
                99
              </View>
              <View className={`${classPrefix}-wrapper-info-data-item-label`}>
                记账天数
              </View>
            </View>
          </View>
        </View>

        <View className={`${classPrefix}-wrapper-setting`}>
          <Image src={Empty} />
        </View>
      </View>
      <Menu />
    </View>
  );
}
