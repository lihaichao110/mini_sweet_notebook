import { HIconType } from '@/types/icons'

interface MenuIconsType {
  icon: HIconType
  name: string
}

/** menu 菜单 */
export const MenuIcons: MenuIconsType[] = [
  { name: '餐饮', icon: 'zhihuicanyin' },
  { name: '购物', icon: 'shouye2' },
  { name: '日用', icon: 'riyongpin' },
  { name: '交通', icon: 'gongjiao' },
  { name: '蔬菜', icon: 'shucai' },
  { name: '水果', icon: 'shuiguo' },
  { name: '零食', icon: 'lingshi' },
  { name: '运动', icon: 'yundong' },
  { name: '娱乐', icon: 'yule' },
  { name: '通讯', icon: 'fenleishoujitongxun' },
  { name: '服饰', icon: 'chongwufushi' },
  { name: '美容', icon: 'shouye3' },
  { name: '住房', icon: 'zhufang' },
  { name: '居家', icon: 'jujia' },
  { name: '孩子', icon: 'shouye4' },
  { name: '长辈', icon: 'changbei' },
  { name: '社交', icon: 'shejiao' },
  { name: '旅行', icon: 'lvhang' },
  { name: '烟酒', icon: 'yanjiu' },
  { name: '数码', icon: 'shoujishuma' },
  { name: '汽车', icon: 'qiche' },
  { name: '医疗', icon: 'yiliao' },
  { name: '书籍', icon: 'shuji' },
  { name: '学习', icon: 'xuexi' },
  { name: '宠物', icon: 'chongwufushi' },
  { name: '礼金', icon: 'lijin' },
  { name: '礼物', icon: 'liwuhuodong' },
  { name: '办公', icon: 'bangong' },
  { name: '维修', icon: 'weixiu' },
  { name: '捐赠', icon: 'aixinjuanzeng' },
  { name: '彩票', icon: 'caipiao' },
  { name: '亲友', icon: 'qinyoujiankang' }
]

export const keyboardKey = [
  [1, 2, 3, 'today'],
  [4, 5, 6, '+'],
  [7, 8, 9, '-'],
  ['.', 0, '删除', 'done']
]
