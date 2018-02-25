import React from 'react'
const cn = require('classnames/bind').bind(require('./yesIcon.scss'))

export default class YesIcon extends React.Component {

    state = {
        active: this.props.active
    }

    onClick = () => {
        let status = this.state.active
        this.setState({
            active: !status
        })
        this.props.cursor && this.props.onClick(!status)
    }

    render() {
        const { className, style, large, active, color, cursor } = this.props,
                css = cn({
                    'yes-icon': true,
                    'blue': color === 'blue',
                    'large': large,
                    'cursor': cursor,
                    'active': this.state.active
                })

        return (
            <div className={css} style={style} onClick={this.onClick}>
                <span></span>
            </div>
        ) 
    }

    

}
