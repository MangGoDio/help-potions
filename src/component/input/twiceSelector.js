import React from 'react'
const cn = require('classnames/bind').bind(require('./twiceSelector.scss'))

export default class TwiceSelector extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            show: false,
            active: 0,
        }
        this.toggleList = this.toggleList.bind(this)
    }

    chooseType(index) {
        this.setState({ active: index })
    }

    chooseItem(item) {
        const { onChange, name } = this.props
        onChange(item.name, name)
        this.setState({ show: false })
    }

    toggleList() {
        if (this.props.disabled) return
        this.setState({ show: !this.state.show })
    }

    render() {

        const { className, style, config, text, disabled } = this.props, { show, active } = this.state,
            { list } = config[active]

        return (
            <div className={cn('selector', className)} style={style}>
                <div className={cn('btn', disabled && 'disabled')} onClick={this.toggleList} >{text}</div>
                {show && <div className={cn('modal')} onClick={this.toggleList}></div>}
                {show && <div className={cn('list')}>
                    <ul className={cn('left')}>{config.map((item, index) =>
                        <li key={index} className={cn(index === active && 'active')}
                            onClick={this.chooseType.bind(this, index)}>{item.id}</li>)}</ul>
                    <ul className={cn('right')}>{list.map((item, index) =>
                        <li key={index} onClick={this.chooseItem.bind(this, item)}>{item.name}</li>)}</ul>
                </div>}
            </div >
        )

    }
}

