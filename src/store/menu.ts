import { create } from 'zustand'

interface MenuStoreType {
  /** menu 菜单状态 */
  visible: boolean
  /** 更新 menu 状态 */
  setVisible: (index: boolean) => void
}

const useMenurStore = create<MenuStoreType>((set) => ({
  visible: false,
  setVisible: (value) => set({ visible: value }),
}))

export default useMenurStore
