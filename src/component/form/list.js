import React from 'react'
const cn = require('classnames/bind').bind(require('./list.scss'))

export default class List extends React.Component {
    constructor(...props) {
        super(...props) 
    }

    render() {

        const { className, style } = this.props,
              css = cn({
                  'list': true,
                  [ className ? className: '']: true,
              })

        return(
            <div className={css} style={style}>
                {this.props.children}
            </div>          
        )
    }
}
