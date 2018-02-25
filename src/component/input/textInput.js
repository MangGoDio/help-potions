import React from 'react'
const cn = require('classnames/bind').bind(require('./input.scss'))

export default class TextInput extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            valueText: this.props.defaultValue || this.props.value || '',
        }
        this.changeInput = this.changeInput.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onReduce = this.onReduce.bind(this)
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
        let newVal = e.target.value

        if (this.props.number) {
            //限制小数位
            if ((this.props.decimal === 0 && newVal.indexOf('.') > -1)) {
                newVal = newVal.substring(0, newVal.indexOf('.'))
            }
            if (this.props.decimal > 0) {
                newVal = newVal.substring(0, newVal.indexOf('.') + this.props.decimal + 1)
            }
            //限制上限
            if (parseFloat(newVal) > this.props.max) {
                newVal = this.props.max
            }
            //限制下限
            if (parseFloat(newVal) < this.props.min) {
                newVal = this.props.min
            }
        }
        this.setState({
            valueText: newVal,
        })
        this.props.onChange(this.props.number ? parseFloat(newVal) : newVal, this.props.name)
    }

    onKeyDown(e) {
        this.props.onKeyDown && this.props.onKeyDown(e)
    }

    onAdd() {
        let num = this.state.valueText,
            max = this.props.max
        max ? (num >= max ? max : num++) : num++
        this.setState({
            valueText: num,
        })
        this.props.onChange(parseFloat(num), this.props.name)
    }

    onReduce() {
        let num = this.state.valueText,
            min = this.props.min || 0
        num <= min ? min : num--
        this.setState({
            valueText: num,
        })
        this.props.onChange(parseFloat(num), this.props.name)
    }

    render() {
        const {
                className, style, placeholder, onChange, error, max, min, autofocus,
                disabled, type, size, square, icon, length, text, desc, number, validate
            } = this.props,
            css = cn({
                'text-input': true,
                'square': square,
                'error': error,
                'disabled': disabled,
                [className ? className : '']: true,
                [this.sizeCss ? this.sizeCss : '']: true,
            })

        return (
            <div style={style}>
                <div className={cn('input-div')}>
                    <input type={type} className={css} value={this.state.valueText} maxLength={length}
                           onKeyDown={this.onKeyDown} autoFocus={autofocus}
                           placeholder={placeholder} onChange={this.changeInput} disabled={disabled}/>
                    { number && <div className={cn('spin')}>
                        <span className={cn('add')} onClick={this.onAdd}></span>
                        <span className={cn('reduce')} onClick={this.onReduce}></span>
                    </div> }
                </div>
                { error && <p className={cn('error-text')}>{error}</p> }
                { text && !error && <p className={cn('text')}>{text}</p> }
                { desc && !error && <p className={cn('desc')}>{desc}</p> }
                { icon && <img className={cn('img')} src={`/src/img/${icon}.svg`}/> }
            </div>

        )
    }
}