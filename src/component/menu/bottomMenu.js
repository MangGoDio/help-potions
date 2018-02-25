import React from 'react'
const cn = require('classnames/bind').bind(require('./bottomMenu.scss'))

const BottomMenu = props => {

    const onClick = (item) => {
        if (item.url) window.open(item.url)
        if (item.click) props.onClick()
    }

    return (
        <div className={cn('bottom-menu')}>
            <ul>
                {props.list.map((item, index) => <li key={index} className={cn((item.url || item.click) && 'hover')}
                    onClick={() => onClick(item)}>{item.text}</li>)}
            </ul>
        </div>
    )
}


export default BottomMenu