import React from 'react'
//css
import styles from './vMenu.scss'
import cnTool from 'classnames/bind'
let cx = cnTool.bind(styles)
import Text from '../text'

/**
 * 竖向带图标菜单
 * @param {object} props {{
 *  {array}  menu 菜单列表[{id,text,icon,isActive}]
 *  {boolean}  isActiveMode 是否可选中的模式. 若false则没有选中状态
 *  {function} onClick:点击时的回调方法 (id,text,event)=>{}
 * }}
 */
class Menu extends React.Component {
    constructor(...props) {
        super(...props)    
        this.state = {
            menu: []
        }
        this.initMenu = this.initMenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.initMenu()
    }

    componentWillReceiveProps(nextProps) {
        this.initMenu()
    }

    initMenu() {
        const { menu, isActiveMode } = this.props,
                menuList = menu.map(item => ({...item}))
                
        if (isActiveMode !== false) {//是否可选中模式
            for (let i = menuList.length - 1; i >= 0; i--) {
                if (menuList[i].isActive) break
                menuList[i].isActive = i === 0
            }
        }
        this.setState({ menu: menuList })
    }

    handleClick(id, text, e) {
        let { menu } = this.props
        if (this.props.isActiveMode !== false) {
            for (let item of menu) {
                item.isActive = id === item.id
            }
        }
        this.setState({
            menu: menu
        })
        this.props.onClick && this.props.onClick(id, text, e)
    }

    render() {
        const className = cx('menu', this.props.className)
        const itemList = this.state.menu.map((item, index) => {
            const handleClick = (e) => {
                this.handleClick(item.id, e)
            }
            if(this.props.type === 'twin') {
                return <TwinItem key={index} onClick={handleClick} isActive={item.isActive} 
                        id={item.id} icon={item.icon} text={item.text} desc={item.desc} />
            } else {
                return <MenuItem key={index} onClick={handleClick} isActive={item.isActive} 
                        id={item.id} icon={item.icon} text={item.text} />
            }
            
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
        'active': props.isActive
    })

    return (
        <div className={className} onClick={props.onClick}>
            <Text.IconText icon={props.icon} height={18} space={25}
                           iconStyle={{height: '30px'}}>{props.text}</Text.IconText>
        </div>
    )
}

const TwinItem = (props) => {
    const className = cx({
        'twin-item': true,
        'active': props.isActive
    })

    return (
        <div className={className} onClick={props.onClick}>
            <img src={`/src/img/${props.icon}.svg`} />
            <div>
                <h2>{props.text}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Menu