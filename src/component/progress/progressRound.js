import React from 'react'
import { IconText } from '../../component/text'
const cn = require('classnames/bind').bind(require('./progressRound.scss'))

/**
 * 圆形进度条
 * 1) 为防止输入参数过多太麻烦，暂定该组件只有两种规格
 * 2) 暂定总值为300，不可修改，以后要变再说
 * @param {object} props {
 *  {object} style 样式接口
 *  {string} className css接口
 *  {string} size 组件大小：'large' or 'small' 
 *  {number} point 具体数值：231
 * }
 */

export default class ProgressRound extends React.Component {
    constructor(...props) {
        super(...props)
        this.config = {
            small: {
                radius: '84px', // 包括边框的总长宽
                width: '42px', // 半个圆的长度
                border: '5px', // 边框粗细
                font: '24px', // 文字大小
                color: '#333', // 边框颜色
                text: '74px', // 文字圆宽度（即radius - border*2）
            },
            large: {
                radius: '150px',
                width: '75px',
                border: '8px',
                font: '48px',
                color: '#333',
                text: '134px',
            },
        }
        this._curPoint = 0
        let { radius, width, border, font, color, text } = this.config[this.props.size]
        this.roundBox = { width: radius, height: radius },
            this.roundDiv = { width: width, height: radius },
            this.roundLeft = {
                width: radius,
                height: radius,
                border: `${border} solid transparent`,
                borderBottom: `${border} solid ${color}`,
                borderLeft: `${border} solid ${color}`,
            },
            this.roundRight = {
                width: radius,
                height: radius,
                border: `${border} solid transparent`,
                borderTop: `${border} solid ${color}`,
                borderRight: `${border} solid ${color}`,
            },
            this.textDiv = {
                width: text,
                height: text,
                lineHeight: text,
                fontSize: font,
            }
        this.state = {
            roundLeft: this.roundLeft,
            roundRight: this.roundRight,
            curPoint: 0,
            amn: false,
        }
        this.add = ''
        this.amn = ''
        this.init = this.init.bind(this)
        this.textAmn = this.textAmn.bind(this)
        this.keysan = this.keysan.bind(this)
    }

    componentDidMount() {
        this.init(this.props.point)
    }

    componentWillReceiveProps(nextProps) {
        this._curPoint = 0
        clearInterval(this.add)
        clearTimeout(this.amn)
        if (!nextProps.id || (nextProps.id !== this.props.id)) this.init(nextProps.point)
    }

    init(point) {
        if (point) {
            this.setState({ amn: true })
            this.textAmn(point)
            this.amn = setTimeout(() => this.keysan(point), 100)
        }
    }

    componentWillUnmount() {
        this._curPoint = 0
        clearInterval(this.add)
        clearTimeout(this.amn)
    }

    // 文字计算动画
    textAmn(point) {
        this.add = setInterval(() => {
            if (this._curPoint < point) {
                this._curPoint++
                this.setState({ curPoint: this._curPoint })
            } else {
                this._curPoint = 0
                clearInterval(this.add)
            }
        }, 5)

    }

    // 边框转动动画
    keysan(point) {
        const max = 100, { roundLeft, roundRight } = this.state
        let percent = point / max, more = percent - .5
        this.setState({
            roundRight: Object.assign({}, roundRight, {
                transform: `rotate(${-135 + 180 * (percent > .5 ? 1 : percent * 2)}deg)`
            })
        })
        if (more > 0) {
            this.setState({
                roundLeft: Object.assign({}, roundLeft, {
                    transform: `rotate(${-135 + 180 * (more * 2)}deg)`,
                    transitionDelay: `.3s`,
                })
            })
        }
    }

    render() {

        const { className, style } = this.props,
            { roundLeft, roundRight, curPoint } = this.state

        return (
            <div className={cn('progress-round', className)} style={this.roundBox}>
                <div className={cn('right')} style={this.roundDiv}>
                    <div style={roundRight}></div>
                </div>
                <div className={cn('left')} style={this.roundDiv}>
                    <div style={roundLeft}></div>
                </div>
                <div className={cn('text')} style={this.textDiv}>{curPoint}</div>
            </div>
        )
    }
}
