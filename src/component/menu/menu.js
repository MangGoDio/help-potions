import React from 'react'

import styles from './menu.scss'
import cnTool from 'classnames/bind'
let cx = cnTool.bind(styles)

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
class Menu extends React.Component {
    constructor(...props) {
        super(...props)
        let active
        const {menu} = Object.assign({}, this.props)
        if (this.props.isActiveMode !== false) {//是否可选中模式
            for (let i = menu.length - 1; i >= 0; i--) {
                if (menu[i].isActive) {
                    active = menu[i].id
                    break
                }
                active = menu[i].id
            }
        }
        this.state = {
            menu: menu,
            active: active
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.menu !== this.props.menu) {
            this.setState({
                menu: Object.assign([], nextProps.menu)
            })
        }
    }

    handleClick(id, text, e) {
        if (this.props.isActiveMode !== false) {
            this.setState({
                active: id
            })
        }
        this.props.onClick && this.props.onClick(id, text, e)
    }

    render() {
        const className = cx({'menu': true, [this.props.className || '']: true})
        const itemList = this.state.menu.map((item, index) => {
            return <MenuItem key={index} onClick={this.handleClick}
                             isActive={item.id === this.state.active} id={item.id}
                             text={item.text}>{item.text}</MenuItem>
        })
        return (
            <div className={className}>
                {itemList}
            </div>
        )
    }
}

const MenuItem = (props) => {
    const className = cx({
        'menu-item': true,
        'active': props.isActive,
        'red-tips': props.status,
    })
    const handleClick = (e) => {
        props.onClick(props.id, props.text, e)
    }

    return (
        <span className={className} onClick={handleClick}>{props.children}</span>
    )
}

export default Menu