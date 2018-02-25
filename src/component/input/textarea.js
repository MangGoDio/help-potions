import React from 'react'
const cn = require('classnames/bind').bind(require('./textarea.scss'))

export default class Textarea extends React.Component {
    constructor(...props) {
        super(...props) 
        this.state = {
            valueText: this.props.value,
        }
        this.changeInput = this.changeInput.bind(this)
        this.sizeConfig = ['full', 'large', 'medium', 'small']
        this.sizeCss = this.props.size && this.sizeConfig.find(i => i === this.props.size)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            this.setState({
                valueText: nextProps.value.toString()
            })
        }
    }

    changeInput(e) {
        this.setState({
            valueText: e.target.value,
        })
        this.props.onChange(e.target.value, this.props.name)
    }

    render() {

        const { className, style, placeholder, onChange, name, length, size, error } = this.props,
              { valueText } = this.state,
              css = cn({
                  'text-area': true,
                  'error': error,
                  [className ? className : '']: true,
                  [this.sizeCss ? this.sizeCss: '']: true,
              })

        return(
            <div>
                <textarea className={css} style={style} placeholder={placeholder}
                      onChange={this.changeInput} maxLength={length} value={valueText} />
                {error && <p className={cn('error-text')}>{error}</p>}
            </div>
            
            
        )
    }
}
