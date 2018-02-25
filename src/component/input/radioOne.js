import React from 'react'
const cn = require('classnames/bind').bind(require('./radio.scss'))

class RadioOne extends React.Component {
    constructor(...props) {
        super(...props)
    }

    onChange = (value) => {
        this.props.onChange(value, this.props.name)
    }

    render() {

        const {children, checked, style} = this.props

        return(
            <label className={cn('radio', checked && 'checked', this.props.className && this.props.className)} style={style} onClick={this.onChange.bind(this, !checked)}>
                <span className={cn('box')}>
                    <span className={cn('input')}></span>
                </span>
                <span className={cn('text')}>{children}</span>
            </label>
        )
    }
}

export default RadioOne