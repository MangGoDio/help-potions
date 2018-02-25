import React from 'react'
const cn = require('classnames/bind').bind(require('./checkbox.scss'))

class Checkbox extends React.Component {
    constructor(...props) {
        super(...props)
        this.hasCheckAll = (this.props.arr.indexOf('checkAll') > -1)
    }

    onCheck(value) {
        if(value === 'checkAll') { // 选择的是全选按钮
            if(this.props.checked.length === this.props.arr.length) { // 如果全部选中了
                this.props.onCheck([], this.props.name) // 清空选中
            } else {
                this.props.onCheck(this.props.arr, this.props.name) // 补充选中
            }
        } else { // 选择的不是全选按钮
            const arr = this.props.checked,
                isHave = arr.find(item => item == value)
            let newArr = arr
            if(isHave) { // 选中数组中已存在该字段
                newArr = arr.filter(item => (item != value && item != 'checkAll')) // 从选中数组中剔除该字段及全选
            } else {
                newArr.push(value) // 添加该字段进数组
                if(newArr.length + 1 === this.props.arr.length && this.hasCheckAll) newArr.push('checkAll') // 如果只差一位就全选了，那么把全选加入
            }
            this.props.onCheck(newArr, this.props.name)
        }
    }

    render() {

        const { value, children, checked, style, disabled, className } = this.props

        return(
            <label className={cn('checkbox', checked.find((n) => n == value) && 'checked', disabled && 'disabled',className && className)} style={style} onClick={this.onCheck.bind(this, value)}>
                <span className={cn('box')}>
                    <span className={cn('input')}></span>
                </span>
                <span style={Object.assign({}, this.props.textStyle)} className={cn('text')}>{children}</span>
            </label>
        )
    }
}

export default Checkbox