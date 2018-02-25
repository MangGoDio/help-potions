import React from 'react'
const cn = require('classnames/bind').bind(require('./radio.scss'))

class RadioGroup extends React.Component {
    constructor(...props) {
        super(...props)
    }

    render() {

        const { children, checked, onChange, className, style, display, name, error } = this.props,
              css = cn({
                  'radio-group': true,
                  [ className ? className: '']: true,
                  'inline': display
              })

        return (
            <div className={css} style={style}>
                {React.Children.map(children, child => 
                    React.cloneElement(child, {checked: checked, onChange: onChange, name: name, style: child.props.style})
                )}
                {error && <p className={cn('error')}>{error}</p>}
            </div>
        )
        
    }
}

export default RadioGroup