import React from 'react'
const cn = require('classnames/bind').bind(require('./list.scss'))

export default class Item extends React.Component {
    constructor(...props) {
        super(...props) 
    }

    render() {

        const { title, align, className, style, must } = this.props,
              css = cn({
                  'item': true,
                  'top': align === 'top',
                  'middle': align === 'middle',
                  [ className ? className: '']: true,
              })

        return(
            <div className={css} style={style}>
                <label className={cn('title')}>
                    {title}
                    { must && <span className={cn('must')}>*</span> }
                </label>
                <div className={cn('container')}>
                    {this.props.children}
                </div>
            </div>      
        )
    }
}
