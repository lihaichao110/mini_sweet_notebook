import { Button, Input, View } from "@tarojs/components";
import { useState } from "react";

import "./edit-nickname.scss";

const classPrefix = "nick-name";
export default function EditNickname() {
  const [nickName, setNickName] = useState("微信昵称");

  const handleSave = () => {
    console.log(nickName, "nickName");
  };

  return (
    <View className={classPrefix}>
      <Input
        value={nickName}
        focus
        type="nickname"
        className={`${classPrefix}-input`}
        onInput={(e) => setNickName(e.detail?.value)}
      />
      <Button className={`${classPrefix}-save`} onClick={handleSave}>
        保存
      </Button>
    </View>
  );
}
