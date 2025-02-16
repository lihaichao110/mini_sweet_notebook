import { create } from 'zustand'

interface TabbarStoreType {
  /** tabbar 选中下标 */
  activeIndex: number
  /** 更新 tabbar 选中下标 */
  setActiveIndex: (index: number) => void
}

const useTabbarStore = create<TabbarStoreType>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
}))

export default useTabbarStore
