import React from 'react'
const cn = require('classnames/bind').bind(require('./baseBtn.scss'))
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
const BaseBtn = (props) => {
    let className = cn({
        'btn-base': true,
        'btn-blue': props.sType === 'blue',
        'btn-no-border': props.sType === 'noBorder',
        'btn-link': props.sType === 'link',
        'btn-disabled': props.disabled,
        'btn-wide': props.wide,
        [props.className ? props.className : '']: true
    })

    return (
        <button disabled={props.disabled} style={props.style} className={className} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default BaseBtn