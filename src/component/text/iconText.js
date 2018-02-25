import React from 'react'
const cn = require('classnames/bind').bind(require('./iconText.scss')) //css
/**
 * 带图标文本
 * @param {object} props {{
 *  {object} style 文本的样式
 *  {string} className: 文本的class
 *  {object} iconStyle: 图标的style
 *  {string} icon: 图标
 *  {dom} children: 文本或子组件
 *  {number} height: 图标和文字的高度(若style或iconStyle已定义其高度, 则该项失效)默认14px
 *  {string} space: 图标和文字之间的间距
 * }}
 */
const IconText = (props) => {
    let className = cn({
        [props.className ? props.className : '']: true
    })
    const fontHeight = props.height || '14px'
    const imgSpace = props.space ? `${props.space}px` : '15px'
    return (
        <span className={cn('text-base', props.classSpan && props.classSpan)}>
        <img src={`/src/img/${props.icon}.svg`} style={Object.assign({}, { height: fontHeight, marginRight: imgSpace }, props.iconStyle)} />
            <span className={className}
                style={Object.assign({}, { fontSize: fontHeight }, props.style)}>{props.children}</span>
        </span>
    )
}

export default IconText