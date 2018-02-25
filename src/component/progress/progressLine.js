import React from 'react'
import { IconText } from '../../component/text'
const cn = require('classnames/bind').bind(require('./progressLine.scss'))
/**
 * 图标文字数字进度条。
 * @param {object} props {
 *  {object} style 样式接口
 *  {string} className css接口
 *  {string} icon 图标名称：building
 *  {string} text 说明文字：战斗力
 *  {number} point 具体数值：5（渣渣）
 *  {string} length 进度条长度：'300'
 * }
 */
export default class ProgressLine extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            style: null,
            point: 0,
        }
        this.init = this.init.bind(this)
    }

    componentDidMount() {
        this.init(this.props.point)
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps.point)
    }

    init(point) {
        if (point) {
            const { length, color } = this.props
            const style = {
                width: `${point / 100 * length}px`,
                background: color || '#333',
            }
            setTimeout(() => this.setState({ style, point }), 100)
        }

    }

    render() {

        const { className, style, icon, text, length } = this.props

        return (
            <div className={cn('progress-line', className)} style={style}>
                <IconText icon={icon}>{text}</IconText>
                <p>：{this.state.point}</p>
                <div className={cn('line')} style={{ width: `${length}px` }}>
                    <span style={this.state.style}></span>
                </div>
            </div>
        )
    }
}
