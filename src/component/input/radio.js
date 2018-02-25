import React from 'react'
const cn = require('classnames/bind').bind(require('./radio.scss'))

class Radio extends React.Component {
    constructor(...props) {
        super(...props)
    }

    onChange = (value) => {
        !this.props.disabled && this.props.onChange(value, this.props.name)
    }

    render() {

        const {value, children, checked, style, disabled} = this.props

        return(
            <label className={cn('radio', checked == value && 'checked', disabled && 'disabled', this.props.className && this.props.className)} style={style} onClick={this.onChange.bind(this, value)}>
                <span className={cn('box')}>
                    <span className={cn('input')}></span>
                </span>
                <span className={cn('text')}>{children}</span>
            </label>
        )
    }
}

export default Radio