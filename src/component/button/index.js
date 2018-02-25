import BaseBtn from './baseBtn'
import IconBtn from './iconBtn'

const Button = {
    /**
     * 基础按钮
     * @param {object} props {{
     *  {string} style 对应的样式
     *  {string} className: css名称
     *  {string} sType: 预设的样式类型 blue蓝底白字/noBorder白底黑字无边/link白底蓝字无边
     *  {boolean} disabled: 是否禁用
     *  {string} children: 子组件
     *  {function} onClick:点击时的回调方法 (event)=>{}
     * }}
     */
    BaseBtn,
    /**
     * 图片按钮
     * @param {object} props {{
     *  {string} style 对应的样式
     *  {string} className: css名称
     *  {string} sType: 预设的样式类型 blue蓝底白字/noBorder白底黑字无边/link白底蓝字无边
     *  {boolean} disabled: 是否禁用
     *  {string} icon: 图标
     *  {string} space: 图标和文字间隔
     *  {string} children: 子组件
     *  {function} onClick:点击时的回调方法 (event)=>{}
     * }}
     */
    IconBtn,
}

export {BaseBtn,IconBtn}
export default Button