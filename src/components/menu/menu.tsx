import { View, Text, ScrollView, Input } from "@tarojs/components";
import useMenurStore from "@/store/menu";
import { AtFloatLayout } from "taro-ui";
import { grey, primary, grey1, background } from "@/constants/color";
import { useState } from "react";
import cx from "classnames";

import { keyboardKey, MenuIcons } from "./constants";
import "./menu.scss";
import Icon from "../Icon/Icon";

const classPrefix = "action-menu";
export default function Menu() {
  const { visible, setVisible } = useMenurStore();

  // 是否弹出键盘
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // 控制键盘按钮效果
  const [isActive, setIsActive] = useState<null | string>(null);

  const [selectIcon, setSelectIcon] = useState<null | string>(null);

  const handleClose = () => {
    setVisible(false);
    setIsShowKeyboard(false);
    setSelectIcon(null);
  };

  const hanldeSelect = (item) => {
    setIsShowKeyboard(true);
    setSelectIcon(item.icon);
  };

  return (
    <AtFloatLayout
      isOpened={visible}
      className={classPrefix}
      onClose={handleClose}
    >
      <View className={`${classPrefix}-header`}>
        <Icon name="quxiao1" size={20} onClick={handleClose} color={grey} />
      </View>
      <ScrollView
        scrollY
        className={`${classPrefix}-scroll`}
        style={{
          paddingBottom: isShowKeyboard ? "44vh" : 0,
        }}
      >
        <View className={`${classPrefix}-content`}>
          {MenuIcons?.map((item, index) => (
            <View
              key={index}
              className={`${classPrefix}-content-item`}
              onClick={() => hanldeSelect(item)}
            >
              <View
                className={`${classPrefix}-content-item-icon`}
                style={{
                  background: selectIcon === item.icon ? primary : background,
                }}
              >
                <Icon
                  name={item.icon}
                  size={26}
                  color={selectIcon === item.icon ? "#fff" : primary}
                />
              </View>
              <Text className={`${classPrefix}-content-item-label`}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        className={cx(`${classPrefix}-enter`, {
          isSelected: isShowKeyboard,
        })}
      >
        <View className={`${classPrefix}-enter-count`}>
          <View className={`${classPrefix}-enter-count-number`}>0</View>
          <View className={`${classPrefix}-enter-count-notes`}>
            <Text>备注：</Text>
            <Input placeholder="点击填写备注" cursorSpacing={24} />
          </View>
        </View>
        <View className={`${classPrefix}-enter-keyboard`}>
          {keyboardKey.map((row, rowIndex) => (
            <View
              className={`${classPrefix}-enter-keyboard-row`}
              key={rowIndex}
            >
              {row.map((key, keyIndex) => (
                <View
                  style={{
                    background:
                      `${rowIndex}-${keyIndex}` === isActive ? grey1 : "",
                  }}
                  key={keyIndex}
                  onTouchStart={() => setIsActive(`${rowIndex}-${keyIndex}`)}
                  onTouchEnd={() => {
                    setTimeout(() => {
                      setIsActive(null);
                    }, 100);
                  }}
                  className={`${classPrefix}-enter-keyboard-row-column`}
                >
                  {key}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </AtFloatLayout>
  );
}
