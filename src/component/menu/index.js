import Menu from './menu'
import VMenu from './vMenu'
import BottomMenu from './bottomMenu'

const module = {
    /**
     * 菜单
     * @param {object} props {{
     *  {array}  menu 菜单列表[{id,text,isActive}]
     *  {boolean}  isActiveMode 是否可选中的模式. 若false则没有选中状态
     *  {string} style 对应的样式
     *  {string} className: css名称
     *  {function} onClick:点击时的回调方法 (id,text,event)=>{}
     * }}
     */
    Menu,
    /**
     * 竖向带图标菜单
     * @param {object} props {{
     *  {array}  menu 菜单列表[{id,text,icon,isActive}]
     *  {boolean}  isActiveMode 是否可选中的模式. 若false则没有选中状态
     *  {function} onClick:点击时的回调方法 (id,text,event)=>{}
     * }}
     */
    VMenu,

    BottomMenu,
}

export { Menu, VMenu, BottomMenu }
export default module