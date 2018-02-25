import React from 'react'
const cn = require('classnames/bind').bind(require('./checkbox.scss'))
import CheckBox from './checkbox'

class CheckGroup extends React.Component {
    constructor(...props) {
        super(...props)
        this.arrText = []   
        React.Children.map(this.props.children, child => {
            this.arrText.push(child.props.value)
        })
    }

    render() {

        const {children, checked, onCheck, className, style, display, name, arr, error } = this.props,
            css = cn({
                'check-group': true,
                [ className ? className : '']: true,
                'inline': display
            })

        return (
            <div className={css} style={style}>
                {React.Children.map(children, child => {
                    if (child.type === CheckBox) {
                        return React.cloneElement(child, {checked: checked, onCheck: onCheck, name: name, 
                                                          arr: this.arrText, style: child.props.style})
                    }
                    else {
                        return child
                    }
                })}
                {error && <p className={cn('error')}>{error}</p>}
            </div>
        )

    }
}

export default CheckGroup