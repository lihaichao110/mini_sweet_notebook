import { View, Text } from "@tarojs/components";
import Icon from "@/components/Icon/Icon";
import { HIconType } from "@/types/icons";
import Taro from "@tarojs/taro";
import { grey, primary } from "@/constants/color";
import useMenurStore from "@/store/menu";
import useTabbarStore from "@/store/tabbar";
import "./index.scss";

interface TabBarItem {
  /** 跳转路径 */
  pagePath?: string;
  /** 选择后的图标 */
  selectedIcon?: HIconType;
  /** 默认图标 */
  icon?: HIconType;
  /** 文字 */
  text?: string;
  /** 自定义渲染 */
  customRender?: () => JSX.Element;
}

const classPrefix = "custom-tab-bar-component";
const CustomTabBar = () => {
  const { activeIndex, setActiveIndex } = useTabbarStore();
  const { setVisible } = useMenurStore();

  const QuickActionBtn = () => (
    <View className="tab-bar-middle-action" onClick={() => setVisible(true)}>
      <View className="tab-bar-add-btn">
        <Icon name="tianjia" />
      </View>
    </View>
  );

  const TabBarList: TabBarItem[] = [
    {
      pagePath: "/pages/index/index",
      selectedIcon: "shouye",
      icon: "shouye1",
      text: "首页",
    },
    {
      customRender: () => <QuickActionBtn />,
    },
    {
      pagePath: "/pages/user/user",
      selectedIcon: "wode-F",
      icon: "my",
      text: "我的",
    },
  ];

  const handleClick = (path, index) => {
    Taro.switchTab({ url: path });
    setActiveIndex(index);
    console.log(path, index, "handleClick");
  };
  return (
    <View className={classPrefix}>
      {TabBarList.map((item, index) =>
        item.customRender ? (
          item.customRender()
        ) : (
          <View
            key={item.pagePath}
            className={`${classPrefix}-item`}
            onClick={() => handleClick(item.pagePath, index)}
          >
            {item.icon && item.selectedIcon && (
              <Icon
                size={20}
                name={index === activeIndex ? item.selectedIcon : item.icon}
                color={index === activeIndex ? primary : grey}
              />
            )}
            <Text
              className={`${classPrefix}-item-label`}
              style={{ color: index === activeIndex ? primary : grey }}
            >
              {item.text}
            </Text>
          </View>
        )
      )}
    </View>
  );
};

CustomTabBar.options = {
  addGlobalClass: true,
};

export default CustomTabBar;
